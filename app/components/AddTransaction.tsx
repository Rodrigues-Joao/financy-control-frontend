'use client'
import { Controller, useForm } from "react-hook-form";
import Field from "./Form/Field/Index";
import Form from "./Form/Index";
import { useState } from "react";
import { CategoriesType, ResponseCategoriesType } from "../types/categories";
import { ResponseAccountsType } from "../types/accounts";
import { CurrencyInput } from "react-currency-mask";
import Button from "./Button";
import Header from "./Header";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import Modal from "./Modal";
import List from "./List/Index";
import { faAngleDown, faAngleRight, faArrowRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface AddTransactionProps
{
    categories: ResponseCategoriesType;
    accounts: ResponseAccountsType;
}

const createTransactionSchema = z.object( {
    paymentMethod: z.string(),
    description: z.string(),
    amount: z.number().min( 0.01 ),
    installments: z.number().default( 1 ),
    isRecurrence: z.boolean().default( false ),
    paymentTypeId: z.number().optional(),
    transactionsTypeId: z.number(),
    accountsId: z.number(),
    userId: z.number(),
    categoryId: z.number(),
    date: z.string().datetime()
} )
type CreateTransactionSchema = z.infer<typeof createTransactionSchema>
export default function AddTransaction( { categories, accounts }: AddTransactionProps )
{
    const [colorAmount, setColorAmount] = useState( "placeholder:text-red-500  text-red-500" )
    const [description, setDescription] = useState( "Gasto" )
    const [transactionsType, setTransactionsType] = useState( 1 )
    const [openModalCategory, setOpenModalCategory] = useState( false )
    const [categoriesList, setCategoriesList] = useState( categories.categories )
    const [selectedCategory, setSelectedCategory] = useState<CategoriesType>( categories.categories[0] )
    const [visibleBackButton, setVisibleBackButton] = useState( false )

    const date = new Date();
    const dateString = date.toISOString().split( 'T' )[0]
    let isRecurrence = false;
    const {
        handleSubmit, register, control, formState: { errors },
    } = useForm<CreateTransactionSchema>( {
        resolver: zodResolver( createTransactionSchema ),
    } )

    async function handleCreateTransactions( data: CreateTransactionSchema )
    {
        console.log( data )

        // let result = await api.post( "transactions", {
        //     description: data.description,
        //     amount: parseFloat( data.amount ),
        //     installments: data.installments | 1,
        //     isRecurrence: isRecurrence,
        //     paymentTypeId: parseInt( data.paymentTypeId ),
        //     transactionsTypeId: parseInt( data.transactionsTypeId ) | 2,
        //     accountsId: parseInt( data.accountsId ),
        //     userId: 1,
        //     categoryId: parseInt( data.categoryId ),
        //     date: new Date( data.date )
        // } )

        // console.log( result.data )
    }

    function handlepaymentTypeChange( event: any ): void
    {
        switch ( event.target.value )
        {

            case "recurrence":
                isRecurrence = true;
                break;
            default:
                isRecurrence = false;
                break;
        }
    }




    const handleTransactionTypeChange = ( event: any ) =>
    {
        console.log( event.target.value )
        //if ( event.target.value === "2" ) setColorAmount( "text-green-500" )

        switch ( event.target.value )
        {
            case "1":
                //setCategories( res )
                setCategoriesList( categories.categories.filter( category => category.categoryTypeId == 1 ) )
                setColorAmount( "placeholder:text-red-500  text-red-500 " )
                setDescription( "Gasto" )
                setTransactionsType( 1 )
                break;
            case "2":
                setCategoriesList( categories.categories.filter( category => category.categoryTypeId == 2 ) )
                setColorAmount( "text-green-500 placeholder:text-green-500" )
                setDescription( "Ganho" )
                setTransactionsType( 2 )
                break;
            case "3":
                setCategoriesList( categories.categories.filter( category => category.categoryTypeId == 3 ) )
                setColorAmount( "text-black placeholder:text-white dark:text-white" )
                setDescription( "Transferência" )
                setTransactionsType( 3 )
                break;

        }
    };

    function handleCategory( category: CategoriesType )
    {
        setSelectedCategory( category )
        if ( category.subCategory?.length > 0 )
        {
            setVisibleBackButton( true )
            setCategoriesList( category.subCategory )
        }
        else
        {
            setOpenModalCategory( false )
        }

    }
    return (
        <>
            <Header navigation="/transactions/resume" title={`Registrar ${ description }`}></Header>
            <Form.Root onSubmit={handleSubmit( handleCreateTransactions )}>

                <div className="flex gap-2 ">
                    <Field.InputRadio  {...register( "transactionsTypeId", { onChange: handleTransactionTypeChange } )} defaultChecked={true} description={"Gastos"} value={1} descriptionStyle="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white  border-none   px-0 py-0 peer-checked:bg-transparent " ></Field.InputRadio>
                    <Field.InputRadio  {...register( "transactionsTypeId", { onChange: handleTransactionTypeChange } )} description={"Ganhos"} value={2} descriptionStyle="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white  border-none   px-0 py-0 peer-checked:bg-transparent " ></Field.InputRadio>
                    <Field.InputRadio  {...register( "transactionsTypeId", { onChange: handleTransactionTypeChange } )} description={"Transferência"} value={3} descriptionStyle="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white  border-none   px-0 py-0 peer-checked:bg-transparent " ></Field.InputRadio>
                </div>
                <Field.Root>
                    <Field.Description>{`Valor do ${ description }`}</Field.Description>

                    <Controller

                        {...register( "amount" )}
                        control={control}
                        render={( { field } ) => (
                            <CurrencyInput

                                currency="BRL"
                                value={field.value}
                                onChangeValue={( _, value ) =>
                                {
                                    field.onChange( value );
                                }}
                                InputElement={<Field.Input placeholder='R$ 0,00' className={`bg-transparent ${ colorAmount }  text-3xl font-bold focus:outline-none  focus:border-none border-none`} ></Field.Input >}
                            />
                        )}

                    />
                    {errors.amount?.message && <p>{errors.amount.message}</p>}
                </Field.Root>
                <Field.Root>
                    <Field.Description>Descrição</Field.Description>
                    <Field.Input {...register( "description" )} placeholder="Digite a descrição"></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Data</Field.Description>
                    <Field.Input {...register( "date" )} defaultValue={dateString} type="date" ></Field.Input>
                </Field.Root>
                <Field.Root className={transactionsType != 1 ? "hidden" : ""} >
                    <Field.Description>Forma de pagamento</Field.Description>
                    <div className="flex flex-row gap-2  ">
                        <Field.InputRadio  {...register( "paymentTypeId" )} defaultChecked={true} description={"Crédito"} value={"1"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "paymentTypeId" )} description={"Débito"} value={"2"} ></Field.InputRadio>
                    </div>
                </Field.Root>
                <Field.Root className={transactionsType != 1 ? "hidden" : ""} >
                    <Field.Description>Condição de pagamento</Field.Description>
                    <div className="flex flex-row gap-2 ">
                        <Field.InputRadio  {...register( "paymentMethod", { onChange: handlepaymentTypeChange } )} defaultChecked={true} description={"À Vista"} value={"cash"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "paymentMethod", { onChange: handlepaymentTypeChange } )} description={"Parcelado"} value={"installment"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "paymentMethod", { onChange: handlepaymentTypeChange } )} description={"Recorrente"} value={"recurrence"} ></Field.InputRadio>
                    </div>
                </Field.Root>
                <Field.Root className={transactionsType != 1 ? "hidden" : ""} >
                    <Field.Description>Parcelas</Field.Description>
                    <Field.Input type="number" {...register( "installments", { min: 0 } )} placeholder="Insira o número de parcelas"  ></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Categoria</Field.Description>

                    <Modal backButtonVisible={visibleBackButton} visible={openModalCategory} backNavigation={() =>
                    {
                        setVisibleBackButton( false )
                        setCategoriesList( categories.categories )
                    }}>
                        <div className="flex flex-col items-center">
                            <p>Categorias</p>
                            <p>Selecionada : {selectedCategory.category}</p>
                        </div>
                        <div className="w-full flex flex-col justify-between  h-full ">
                            <List.Root >
                                {
                                    categoriesList.map( category =>
                                    {
                                        if ( category.categoryTypeId === transactionsType )
                                            return (
                                                <List.Item onClick={() => handleCategory( category )} key={category.id} className="border-none mt-2 bg-gray-800 rounded-md">
                                                    <List.Content >
                                                        <List.ContentTitle title={category.category} />
                                                    </List.Content>
                                                    <List.Icon icon={faAngleRight} color="gray" />
                                                </List.Item>
                                            )
                                    } )
                                }
                            </List.Root>
                            <Button onClick={() => { setOpenModalCategory( false ) }}> Escolher</Button>
                        </div>
                    </Modal>
                    <div className="flex flex-row justify-between p-2  items-center   border border-gray-700  px-2 py-3  hover:cursor-pointer" onClick={() => setOpenModalCategory( true )}>
                        <div className="flex flex-col">
                            <p>{selectedCategory.category}</p>

                        </div>
                        <FontAwesomeIcon className="w-10" icon={faAngleDown} color={"gray"} />
                    </div>
                    <Field.Input {...register( "categoryId" )} value={selectedCategory?.id} className="hidden">

                    </Field.Input>
                    {/* <Field.Select {...register( "categoryId" )} value={selectedCategory?.id} onClick={( event ) =>
                    {
                        event.preventDefault();
                        setOpenModalCategory( true )
                    }}  >
                        {
                            categories?.categories.map( ( category ) =>
                            {
                                if ( category.categoryTypeId === transactionsType )
                                    return (
                                        <option key={category.id} value={category.id} >{category.category}</option>
                                    )
                            } )
                        }
                    </Field.Select> */}
                </Field.Root>
                <Field.Root>
                    <Field.Description>Conta</Field.Description>
                    <Field.Select  {...register( "accountsId" )}>
                        {
                            accounts?.accounts.map( ( account ) =>
                            {

                                return (
                                    <option key={account.id} value={account.id}>{account.name}</option>
                                )
                            } )
                        }
                    </Field.Select>
                </Field.Root>
                <Button type="submit">
                    Salvar
                </Button>


            </Form.Root >
        </>
    )
}