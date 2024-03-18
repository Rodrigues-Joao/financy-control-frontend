
'use client'
import Header from "@/app/components/Header";
import React, { useState, useRef } from 'react';


export default function Add()
{
    const [value, setValue] = useState( '0' );
    const inputRef = useRef<HTMLInputElement>( null );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        setValue( e.target.value );
    };
    return (
        <div className="flex flex-col min-h-scre  ">
            <Header title="Registrar Gasto"></Header>
            <div className="m-4 flex flex-col gap-2">



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
                <div>
                    <div className="flex flex-col">
                        <p>Valor do ganho</p>

                    </div>

                </div>

            </div>
        </div>
    )
}