"use client"
import Field from "../components/Form/Field/Index";
import Form from "../components/Form/Index";
import Header from "../components/Header";
import Input from "../components/Input";
import List from "../components/List/Index";
import ApiCategories from "../api-functions/categories/index"
import { useEffect, useState } from "react";
import { CategoriesType, ResponseCategoriesType } from "../types/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const createFormCategorySchema = z.object( {
    category: z.string(),
} )

type CreateCategorySchema = z.infer<typeof createFormCategorySchema>

export default
    function Categories()
{
    const [title, setTitle] = useState<string>( "Categorias" )
    const [isSubCategory, setIsSubCategory] = useState<boolean>( false )
    const [categories, setCategories] = useState<CategoriesType[]>()
    const [parentCategory, setParentCategory] = useState<CategoriesType>()
    const [categoryType, setCategoryType] = useState( 1 )
    const [showModalAddCategory, setShowModalAddCategory] = useState( false )

    const [allCategories, setAllCategories] = useState<CategoriesType[]>()
    const {
        handleSubmit, register, control, watch, formState: { errors },
    } = useForm<CreateCategorySchema>( {
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
        // setSelectedCategory( category )
        if ( category?.subCategory?.length > 0 )
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
    function handleCategorySubmit( data: CreateCategorySchema )
    {

        console.log( data )



    }
    useEffect( () =>
    {
        getCategories()

    }, [] )
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
                            <Field.Input {...register( "category" )} placeholder="alimentação"></Field.Input>
                        </Field.Root>

                        <div className="flex gap-2">
                            <Button onClick={() => setShowModalAddCategory( false )} className="px-4 rounded-md py-2 bg-red-500 w-full ">Cancelar</Button>
                            <Button type="submit" className="px-4 rounded-md py-2 bg-blue-400  w-full" >Salvar</Button>
                        </div>
                    </Form.Root >
                </div>
            </Modal >
        </>
    )
}