"use client"
import Field from "../components/Form/Field/Index";
import Form from "../components/Form/Index";
import Header from "../components/Header";
import Input from "../components/Input";
import List from "../components/List/Index";
import ApiAccounts from "../api-functions/accounts/index"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { StatusCode } from "../enumerations/StatusCode";
import { AccountType, CreateAccount, CreateAccountSchema } from "../types/accounts";
import { CategoriesType } from "../types/categories";
import CurrencyNumber from "../components/CurrencyNumber";
import { CurrencyInput } from "react-currency-mask";

const createFormAccountSchema = z.object( {
    name: z.string(),
    balance: z.coerce.number(),
} )


type CreateAccountFormSchema = z.infer<typeof createFormAccountSchema>

export default
    function Accounts()
{
    const [title, setTitle] = useState<string>( "Contas" )
    const [accounts, setAccount] = useState<AccountType[]>()
    const [showModalAddAccount, setShowModalAddAccount] = useState( false )
    const [accountName, setAccountName] = useState<string>()
    const [accountBalance, setAccountBalance] = useState<number>( 0 )


    const {
        handleSubmit, register, control, watch, formState: { errors },
    } = useForm<CreateAccountFormSchema>( {
        resolver: zodResolver( createFormAccountSchema ),
    } )
    async function getAccounts()
    {
        const res = await ApiAccounts.Get( 1 )

        setAccount( res.accounts )
    }
    function handleAccount( category: AccountType )
    {

    }
    function handleChangeAccountType( event: any )
    {

    }
    function handleAddAccount()
    {
        setShowModalAddAccount( true )
    }
    function handleAccountDefault()
    {


        setTitle( "Categorias" )
        //console.log( allCategories )

    }
    async function handleAccountSubmit( data: CreateAccountFormSchema )
    {

        setAccountName( "" );
        setAccountBalance( 0 );
        let createAccount: CreateAccount = {
            userId: 1,
            name: data.name,
            balance: data.balance,
        }

        let resSchema;
        try
        {
            resSchema = CreateAccountSchema.parse( createAccount )
        }
        catch ( err )
        {
            return;
        }
        const res = await ApiAccounts.Create( resSchema )
        if ( res.statusCode == StatusCode.Created )
        {
            setShowModalAddAccount( false );
        }

    }

    function handleAccountNameChange( event: React.ChangeEvent<HTMLInputElement> ): void
    {
        setAccountName( event.target.value )

    }


    function handleChangeBalance( event: React.ChangeEvent<HTMLInputElement> ): void
    {
        setAccountBalance( parseFloat( event.target.value ) )
    }



    useEffect( () =>
    {
        getAccounts()

    }, [showModalAddAccount] )
    return (
        <>
            <Header title={title} />
            <Input></Input >


            <div className="p-4 flex gap-4  flex-col items-center">

                {
                    ( accounts != undefined && accounts?.length > 0 ) &&
                    <List.Root>
                        {
                            accounts?.map( account =>
                            {

                                return (
                                    <List.Item className="h-20 px-4 mb-1 rounded bg-gray-800 border-none" key={account.id} onClick={() => handleAccount( account )}>
                                        <List.Content >
                                            <List.ContentTitle title={account.name} />
                                            <CurrencyNumber value={account.balance}  ></CurrencyNumber>
                                        </List.Content>
                                    </List.Item>
                                )
                            } )
                        }
                    </List.Root>
                }
                <Button onClick={handleAddAccount} className="px-4 rounded-md py-2 bg-blue-400 absolute bottom-10 mx-auto" >Adicionar</Button>
            </div>
            <Modal className="self-center mx-auto relative" visible={showModalAddAccount} >
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold ">Adicionar conta</h3>
                </div>
                <div className="w-full flex flex-col justify-between items-center h-full p-2">
                    <Form.Root className="bg-white" onSubmit={handleSubmit( handleAccountSubmit )}>
                        <Field.Root >
                            <Field.Description>
                                Nome da conta
                            </Field.Description>
                            <Field.Input {...register( "name", { onChange: handleAccountNameChange } )} value={accountName} placeholder="nome da conta"></Field.Input>
                        </Field.Root>
                        <Field.Root >
                            <Field.Description>
                                Valor inicial da conta
                            </Field.Description>
                            <Controller
                                {...register( "balance", {
                                    onChange: handleChangeBalance
                                } )}

                                control={control}
                                render={( { field } ) =>
                                {
                                    field.value = accountBalance;
                                    return ( <CurrencyInput
                                        currency="BRL"
                                        value={field.value}
                                        onChangeValue={( _, value ) =>
                                        {

                                            field.onChange( value );

                                        }}
                                        InputElement={<Field.Input placeholder='R$ 0,00' className={`bg-transparent text-xl `} ></Field.Input >}
                                    /> )
                                }}

                            />
                        </Field.Root>
                        <div className="flex gap-2">
                            <Button onClick={
                                () =>
                                {
                                    setShowModalAddAccount( false )
                                    setAccountName( "" );
                                    setAccountBalance( 0 );
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
