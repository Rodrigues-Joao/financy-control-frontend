'use client'
import { FormHTMLAttributes, useState } from "react"
import { useForm } from "react-hook-form"
import Field from "./Field/Index"
import { ResponseAccountsType } from "@/app/types/accounts"
import { ResponseCategoriesType } from "@/app/types/categories"
import { api } from "@/app/lib/axios";

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement>
{
    accounts: ResponseAccountsType
    categories: ResponseCategoriesType
}

export default function FormRoot( { accounts, categories }: FormRootProps )
{
    const date = new Date();
    const dateString = date.toISOString().split( 'T' )[0]

    const [colorAmount, setColorAmount] = useState( "text-red-500" )
    const [transactionsType, setTransactionsType] = useState( "expenses" )
    let isRecurrence = false;

    const {
        handleSubmit, register
    } = useForm()

    async function handleCreateTransactions( data: any )
    {
        console.log( data )

        let result = await api.post( "transactions", {
            description: data.description,
            amount: parseFloat( data.amount ),
            installments: data.installments | 1,
            isRecurrence: isRecurrence,
            paymentTypeId: parseInt( data.paymentTypeId ),
            transactionsTypeId: parseInt( data.transactionsTypeId ) | 2,
            accountsId: parseInt( data.accountsId ),
            userId: 1,
            categoryId: parseInt( data.categoryId ),
            date: new Date( data.date )
        } )

        console.log( result.data )
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
                setColorAmount( "text-red-500" )
                setTransactionsType( "expenses" )
                break;
            case "2":
                setColorAmount( "text-green-500" )
                setTransactionsType( "income" )
                break;
            case "3":
                setColorAmount( "text-black dark:text-white" )
                setTransactionsType( "transfer" )
                break;

        }
    };

    return (
        <form onSubmit={handleSubmit( handleCreateTransactions )} >
            <div className="m-4 flex flex-col gap-4">
                <div className="flex gap-2 ">
                    <div className="relative  rounded-full " >
                        <input  {...register( "transactionsTypeId", { onChange: handleTransactionTypeChange } )} defaultChecked={true} type="radio" value="1" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                        <p className=" text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white ">Gastos</p>
                    </div>
                    <div className="relative  rounded-full " >
                        <input {...register( "transactionsTypeId", { onChange: handleTransactionTypeChange } )} type="radio" value="2" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                        <p className=" text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white" >Ganhos</p>
                    </div>
                    <div className="relative  rounded-full " >
                        <input  {...register( "transactionsTypeId", { onChange: handleTransactionTypeChange } )} type="radio" value="3" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                        <p className="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white ">Transferência</p>
                    </div>

                </div>
                <Field.Root>
                    <Field.Description>Valor do ganho</Field.Description>
                    <Field.Input  {...register( "amount", { min: 0.01 } )} type="text" defaultValue={0} className={`bg-transparent ${ colorAmount }  text-3xl font-bold focus:outline-none  focus:border-none border-none`} ></Field.Input >
                </Field.Root>
                <Field.Root>
                    <Field.Description>Descrição</Field.Description>
                    <Field.Input {...register( "description" )} placeholder="Digite a descrição"></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Data</Field.Description>
                    <Field.Input {...register( "date" )} defaultValue={dateString} type="date" ></Field.Input>
                </Field.Root>
                <Field.Root className={transactionsType != "expenses" ? "hidden" : ""} >
                    <Field.Description>Forma de pagamento</Field.Description>
                    <div className="flex flex-row gap-2  ">
                        <Field.InputRadio  {...register( "paymentTypeId" )} defaultChecked={true} description={"Crédito"} value={"1"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "paymentTypeId" )} description={"Débito"} value={"2"} ></Field.InputRadio>
                    </div>
                </Field.Root>
                <Field.Root className={transactionsType != "expenses" ? "hidden" : ""} >
                    <Field.Description>Condição de pagamento</Field.Description>
                    <div className="flex flex-row gap-2 ">
                        <Field.InputRadio  {...register( "PaymentMethod", { onChange: handlepaymentTypeChange } )} defaultChecked={true} description={"À Vista"} value={"cash"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "PaymentMethod", { onChange: handlepaymentTypeChange } )} description={"Parcelado"} value={"installment"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "PaymentMethod", { onChange: handlepaymentTypeChange } )} description={"Recorrente"} value={"recurrence"} ></Field.InputRadio>
                    </div>
                </Field.Root>
                <Field.Root className={transactionsType != "expenses" ? "hidden" : ""} >
                    <Field.Description>Parcelas</Field.Description>
                    <Field.Input type="number" {...register( "installments" )} placeholder="Insira o número de parcelas"  ></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Categoria</Field.Description>
                    <Field.Select {...register( "categoryId" )} >
                        {
                            categories.categories.map( category =>
                            {
                                return (
                                    <option value={category.id}>{category.category}</option>
                                )
                            } )
                        }
                    </Field.Select>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Conta</Field.Description>
                    <Field.Select  {...register( "accountsId" )}>
                        {
                            accounts.accounts.map( ( account ) =>
                            {
                                return (
                                    <option value={account.id}>{account.name}</option>
                                )
                            } )
                        }
                    </Field.Select>
                </Field.Root>
                <button type="submit" className="bg-green-800 w-full rounded">
                    Salvar
                </button>

            </div>
        </form>
    )
}

