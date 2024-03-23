
'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import Header from "@/app/components/Header";
import InputRadio from "@/app/components/InputRadio";
import React, { useState, useRef } from 'react';


export default function Add()
{
    const defaultTransactionsType = "expenses"

    const [value, setValue] = useState( '0' );
    const inputRef = useRef<HTMLInputElement>( null );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setValue( e.target.value );
    };
    const {
        handleSubmit, register
    } = useForm()

    function handleCreateTransactions( data: any )
    {
        console.log( data )
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Registrar Gasto"></Header>
            <form action="" onSubmit={handleSubmit( handleCreateTransactions )}>
                <div className="m-4 flex flex-col gap-4">
                    <div className="flex gap-2 ">
                        <div className="relative  rounded-full " >
                            <input name="TransactionsType" type="radio" value="expenses" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                            <p className=" text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white ">Gastos</p>
                        </div>
                        <div className="relative  rounded-full " >
                            <input name="TransactionsType" type="radio" value="income" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                            <p className=" text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white" >Ganhos</p>
                        </div>
                        <div className="relative  rounded-full " >
                            <input name="TransactionsType" type="radio" value="transfer" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                            <p className="text-lg text-gray-300 peer-checked:font-bold peer-checked:text-white ">Transferência</p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold space-x-1 tracking-wider">Valor do ganho</p>
                        <input type="number" className="bg-transparent placeholder:text-green-300 text-3xl font-bold focus:outline-none  focus:border-transparent " placeholder="0,00" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-semibold space-x-1 tracking-wider">Descrição</p>
                        <input type="text" className=" rounded bg-transparent placeholder:text-gray-300 text-md border border-gray-700  px-2 py-3" placeholder="Digite a descrição" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold space-x-1 tracking-wider">Data</p>
                        <input type="date" className=" rounded bg-transparent placeholder:text-gray-300 text-md border border-gray-700  px-2 py-3" placeholder="Digite a descrição" />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p className="font-semibold space-x-1 tracking-wider">Forma de pagamento</p>
                        <div className="flex flex-row gap-2 ">
                            <InputRadio description={"Crédito"} {...register( "PaymentType" )} value={"credito"}></InputRadio>
                            <InputRadio description={"Débito"} {...register( "PaymentType" )} value={"debito"}></InputRadio>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p className="font-semibold space-x-1 tracking-wider">Forma de pagamento</p>
                        <div className="flex flex-row gap-2">
                            <div className="relative" >
                                <input {...register( "PaymentMethod" )} type="radio" value="a" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                                <div className=" border   px-6 py-1 peer-checked:bg-green-900 rounded-full border-gray-400 peer-checked:font-bold peer-checked:text-white ">
                                    <p className=" text-sm tracking-wider text-gray-300  ">À Vista</p>
                                </div>
                            </div>
                            <div className="relative" >
                                <input {...register( "PaymentMethod" )} type="radio" value="b" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                                <div className=" border   px-6 py-1 peer-checked:bg-green-900 rounded-full border-gray-400 peer-checked:font-bold peer-checked:text-white ">
                                    <p className=" text-sm tracking-wider text-gray-300  ">Parcelado</p>
                                </div>

                            </div>
                            <div className="relative" >
                                <input {...register( "PaymentMethod" )} type="radio" value="c" className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
                                <div className=" border   px-6 py-1 peer-checked:bg-green-900 rounded-full border-gray-400 peer-checked:font-bold peer-checked:text-white ">
                                    <p className=" text-sm tracking-wider text-gray-300  ">Recorrente</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="flex flex-col gap-2  peer-checked:hidden w-full">
                        <p className="font-semibold space-x-1 tracking-wider">Parcelas</p>
                        <input type="number" className=" rounded bg-transparent placeholder:text-gray-300 text-md border border-gray-700  px-2 py-3" placeholder="Insira o número de parcelas" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold space-x-1 tracking-wider">Categoria</p>
                        <select className="bg-transparent placeholder:text-gray-300 text-md border border-gray-700  px-2 py-3 rounded">
                            <option value="">Alimentação</option>
                            <option value="">Alimentação</option>
                            <option value="">Alimentação</option>
                            <option value="">Alimentação</option>
                            <option value="">Alimentação</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold space-x-1 tracking-wider">Conta</p>
                        <select className="bg-transparent placeholder:text-gray-300 text-md border border-gray-700  px-2 py-3 rounded">
                            <option value="">Bradesco</option>
                            <option value="">Bradesco</option>
                            <option value="">Bradesco</option>

                        </select>
                    </div>
                    <button type="submit" className="bg-green-800 w-full rounded">
                        Salvar
                    </button>

                </div>
            </form>
        </div>
    )
}