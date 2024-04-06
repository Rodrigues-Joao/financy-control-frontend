'use client'



import Header from "@/app/components/Header";
import React, { useEffect, useState } from 'react';
import Form from "@/app/components/Form/Index";
import { api } from "@/app/lib/axios";
import { CategoriesType, ResponseCategoriesType } from "@/app/types/categories";
import { ResponseAccountsType } from "@/app/types/accounts";
import { Controller, useForm, useFormContext } from "react-hook-form";
import Field from "@/app/components/Form/Field/Index";
import Button from "@/app/components/Button";
import { CurrencyInput } from "react-currency-mask";


export default function Add()
{
    const [colorAmount, setColorAmount] = useState( "placeholder:text-red-500  text-red-500" )
    const [description, setDescription] = useState( "Gasto" )
    const
        [transactionsType, setTransactionsType] = useState( 1 )
    const [categories, setCategories] = useState<ResponseCategoriesType>()

    const [accounts, setAccounts] = useState<ResponseAccountsType>()


    async function GetAPI()
    {
        console.log( "teste " )
        const [resCategories, resAccounts] = await Promise.all( [
            api.get( "/categories?userId=1" ),
            api.get( "/accounts?userId=1" )
        ] );

        setCategories( resCategories.data )
        setAccounts( resAccounts.data )
    }
    const date = new Date();
    const dateString = date.toISOString().split( 'T' )[0]



    useEffect( () =>
    {
        console.log( "teste" )
        GetAPI();

    }, [] );
    let isRecurrence = false;

    const {
        handleSubmit, register, control
    } = useForm()

    async function handleCreateTransactions( data: any )
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
                setColorAmount( "placeholder:text-red-500  text-red-500 " )
                setDescription( "Gasto" )
                setTransactionsType( 1 )
                break;
            case "2":
                //  setCategoriesFilter( categories.categories.filter( category => category.categoryTypeId == 1 ) )
                setColorAmount( "text-green-500 placeholder:text-green-500" )
                setDescription( "Ganho" )
                setTransactionsType( 2 )
                break;
            case "3":
                setColorAmount( "text-black placeholder:text-white dark:text-white" )
                setDescription( "Transferência" )
                setTransactionsType( 3 )
                break;

        }
    };
    return (
        <div className="flex flex-col min-h-screen">
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

                        {...register( "amount", { min: 0.01 } )}
                        control={control}
                        render={( { field } ) => (
                            <CurrencyInput
                                hideSymbol={true}
                                currency="BRL"
                                value={field.value}
                                onChangeValue={( _, value ) =>
                                {
                                    field.onChange( value );
                                }}
                                InputElement={<Field.Input placeholder='0,00' className={`bg-transparent ${ colorAmount }  text-3xl font-bold focus:outline-none  focus:border-none border-none`} ></Field.Input >}
                            />
                        )}
                    />
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
                        <Field.InputRadio  {...register( "PaymentMethod", { onChange: handlepaymentTypeChange } )} defaultChecked={true} description={"À Vista"} value={"cash"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "PaymentMethod", { onChange: handlepaymentTypeChange } )} description={"Parcelado"} value={"installment"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "PaymentMethod", { onChange: handlepaymentTypeChange } )} description={"Recorrente"} value={"recurrence"} ></Field.InputRadio>
                    </div>
                </Field.Root>
                <Field.Root className={transactionsType != 1 ? "hidden" : ""} >
                    <Field.Description>Parcelas</Field.Description>
                    <Field.Input type="number" {...register( "installments", { min: 0 } )} placeholder="Insira o número de parcelas"  ></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Categoria</Field.Description>
                    <Field.Select {...register( "categoryId" )} >
                        {
                            categories?.categories.map( ( category ) =>
                            {
                                if ( category.categoryTypeId === transactionsType )
                                    return (
                                        <option key={category.id} value={category.id} >{category.category}</option>
                                    )
                            } )
                        }
                    </Field.Select>
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


            </Form.Root>

        </div>
    )
}