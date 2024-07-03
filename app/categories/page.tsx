"use client"
import Field from "../components/Form/Field/Index";
import Form from "../components/Form/Index";
import Header from "../components/Header";
import Input from "../components/Input";
import List from "../components/List/Index";
import ApiCategories from "../api-functions/categories/index"
import { useEffect, useState } from "react";
import { CategoriesType, CreateCategory, CreateCategorySchema, ResponseCategoriesType } from "../types/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StatusCode } from "../enumerations/StatusCode";

const createFormCategorySchema = z.object( {
    category: z.string(),
} )

type CreateCategoryFormSchema = z.infer<typeof createFormCategorySchema>

export default
    function Categories()
{
    const [title, setTitle] = useState<string>( "Categorias" )
    const [isSubCategory, setIsSubCategory] = useState<boolean>( false )
    const [categories, setCategories] = useState<CategoriesType[]>()
    const [parentCategory, setParentCategory] = useState<CategoriesType>()
    const [categoryType, setCategoryType] = useState( 1 )
    const [showModalAddCategory, setShowModalAddCategory] = useState( false )
    const [inputCategory, setInputCategory] = useState<string>()

    const [allCategories, setAllCategories] = useState<CategoriesType[]>()
    const {
        handleSubmit, register, control, watch, formState: { errors },
    } = useForm<CreateCategoryFormSchema>( {
        resolver: zodResolver( createFormCategorySchema ),
    } )
    async function getCategories()
    {
        const res = await ApiCategories.Get( 1 )
        setAllCategories( res.categories )
        setCategories( res.categories )
    }
    function handleCategory( category: CategoriesType )
    {
        if ( category.isParent )
        {
            setIsSubCategory( true )
            setParentCategory( category )
            setTitle( "Sub categorias" )
            setCategories( category.subCategory )
        }
    }
    function handleChangeCategoryType( event: any )
    {
        setCategoryType( parseInt( event.target.value ) )
    }
    function handleAddCategory()
    {
        setShowModalAddCategory( true )
    }
    function handleCategoryDefault()
    {
        setIsSubCategory( false )

        setTitle( "Categorias" )
        console.log( allCategories )
        setCategories( allCategories )
    }
    async function handleCategorySubmit( data: CreateCategoryFormSchema )
    {
        setInputCategory( "" );
        let createCategory: CreateCategory = {
            category: data.category,
            categoryTypeId: categoryType,
            userId: 1,
        }
        if ( isSubCategory )
        {
            createCategory.parentId = parentCategory?.id
        }
        let resSchema;
        try
        {
            resSchema = CreateCategorySchema.parse( createCategory )
        }
        catch ( err )
        {
            return;
        }
        const res = await ApiCategories.Create( resSchema )
        if ( res.statusCode == StatusCode.Created )
        {
            setIsSubCategory( false );
            setShowModalAddCategory( false );
        }

    }

    function handleInputCategoryChange( event: React.ChangeEvent<HTMLInputElement> ): void
    {
        setInputCategory( event.target.value )

    }

    useEffect( () =>
    {
        getCategories()

    }, [showModalAddCategory] )
    return (
        <>
            <Header title={title} />
            {
                isSubCategory ?
                    (
                        <div className="flex flex-row  items-center m-4">
                            <FontAwesomeIcon onClick={handleCategoryDefault} className="absolute" size="2x" icon={faAngleLeft} />
                            <h1 className="text-lg mx-auto">{parentCategory?.category}</h1>
                        </div>
                    ) :
                    (
                        <>
                            <Input></Input >
                            <Form.Root>
                                <Field.Root className=" flex gap-2" >
                                    <Field.InputRadio name="categoryType" onChange={handleChangeCategoryType} defaultChecked={true} description={"Gastos"} value={1} descriptionStyle="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white  border-none   px-0 py-0 peer-checked:bg-transparent " />
                                    <Field.InputRadio name="categoryType" onChange={handleChangeCategoryType} description={"Ganhos"} value={2} descriptionStyle="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white  border-none   px-0 py-0 peer-checked:bg-transparent " />
                                </Field.Root>
                            </Form.Root>
                        </>
                    )
            }

            <div className="p-4 flex gap-4  flex-col items-center">

                {
                    categories != undefined && categories?.length > 0 ? (

                        <List.Root>
                            {
                                categories?.map( category =>
                                {
                                    if ( category.categoryTypeId === categoryType )
                                    {
                                        return (
                                            <List.Item className="h-20 px-4 mb-1 rounded bg-gray-800 border-none" key={category.id} onClick={() => handleCategory( category )}>
                                                <List.Content >
                                                    <List.ContentTitle title={category.category} />
                                                    {
                                                        category.subCategory?.length > 0 &&
                                                        <List.ContentSubtitle subtitle={`${ category.subCategory.length } sub categoria`} />
                                                    }
                                                </List.Content>
                                            </List.Item>
                                        )
                                    }

                                } )
                            }


                        </List.Root>
                    ) : (
                        <div className="flex flex-row  items-center m-4">
                            <h1 className="text-lg mx-auto text-cyan-50"> {isSubCategory ? "Nenhuma sub categoria cadastrada" : "Nenhuma Categoria cadastrada"}</h1>
                        </div>
                    )
                }
                <Button onClick={handleAddCategory} className="px-4 rounded-md py-2 bg-blue-400 absolute bottom-10 mx-auto" >Adicionar  {isSubCategory ? "SubCategoria" : "Categoria"}</Button>
            </div>
            <Modal className="self-center mx-auto relative" visible={showModalAddCategory} >
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold ">Adicionar categoria</h3>
                </div>
                <div className="w-full flex flex-col justify-between items-center h-full p-2">
                    <Form.Root className="bg-white" onSubmit={handleSubmit( handleCategorySubmit )}>
                        <Field.Root >
                            <Field.Description>
                                Nome da categoria
                            </Field.Description>
                            <Field.Input {...register( "category", { onChange: handleInputCategoryChange } )} value={inputCategory} placeholder="nome da categoria"></Field.Input>
                        </Field.Root>

                        <div className="flex gap-2">
                            <Button onClick={
                                () =>
                                {
                                    setShowModalAddCategory( false )
                                    setInputCategory( "" );
                                }

                            } className="px-4 rounded-md py-2 bg-red-500 w-full ">Cancelar</Button>
                            <Button type="submit" className="px-4 rounded-md py-2 bg-blue-400  w-full" >Salvar</Button>
                        </div>
                    </Form.Root >
                </div>
            </Modal >
        </>
    )
}

