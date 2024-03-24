'use client'

import { FormHTMLAttributes, ReactNode, forwardRef } from "react"
import { useForm } from "react-hook-form"
import Field from "./Field/Index"
import { ResponseAccountsType } from "@/app/types/accounts"
import { ResponseCategoriesType } from "@/app/types/categories"
interface FormRootProps extends FormHTMLAttributes<HTMLFormElement>
{
    accounts: ResponseAccountsType
    categories: ResponseCategoriesType
}

export default function FormRoot( { accounts, categories }: FormRootProps )
{
    const {
        handleSubmit, register
    } = useForm()
    function handleCreateTransactions( data: any )
    {
        console.log( data )
    }
    return (
        <form onSubmit={handleSubmit( handleCreateTransactions )} >
            <div className="m-4 flex flex-col gap-4">
                <div className="flex gap-2 ">
                    <div className="relative  rounded-full " >
                        <input {...register( "TransactionsType" )} type="radio" value="expenses" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                        <p className=" text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white ">Gastos</p>
                    </div>
                    <div className="relative  rounded-full " >
                        <input {...register( "TransactionsType" )} type="radio" value="income" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                        <p className=" text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white" >Ganhos</p>
                    </div>
                    <div className="relative  rounded-full " >
                        <input  {...register( "TransactionsType" )} type="radio" value="transfer" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                        <p className="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white ">Transferência</p>
                    </div>

                </div>
                <Field.Root>
                    <Field.Description>Valor do ganho</Field.Description>
                    <Field.Input  {...register( "Amont" )} type="number" placeholder="0,00" className="bg-transparent placeholder:text-green-300 text-3xl font-bold focus:outline-none  focus:border-none border-none"  ></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Descrição</Field.Description>
                    <Field.Input {...register( "Description" )} placeholder="Digite a descrição"></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Data</Field.Description>
                    <Field.Input {...register( "Date" )} type="date" ></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Forma de pagamento</Field.Description>
                    <div className="flex flex-row gap-2 ">
                        <Field.InputRadio  {...register( "PaymentType" )} description={"Crédito"} value={"credito"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "PaymentType" )} description={"Débito"} value={"debito"} ></Field.InputRadio>
                    </div>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Condição de pagamento</Field.Description>
                    <div className="flex flex-row gap-2 ">
                        <Field.InputRadio  {...register( "PaymentMethod" )} description={"À Vista"} value={"credito"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "PaymentMethod" )} description={"Parcelado"} value={"debito"} ></Field.InputRadio>
                        <Field.InputRadio  {...register( "PaymentMethod" )} description={"Recorrente"} value={"debito"} ></Field.InputRadio>
                    </div>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Parcelas</Field.Description>
                    <Field.Input type="number" placeholder="Insira o número de parcelas"  ></Field.Input>
                </Field.Root>
                <Field.Root>
                    <Field.Description>Categoria</Field.Description>
                    <Field.Select {...register( "Categories" )} >
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
                    <Field.Select  {...register( "Account" )}>
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

