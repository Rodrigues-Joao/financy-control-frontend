'use client'

import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement>
{
    description: string;
    descriptionStyle?: string;
}

const FieldInputRadio = forwardRef<HTMLInputElement, InputRadioProps>( function FieldInputRadio( { description, descriptionStyle, ...props }: InputRadioProps, ref )
{

    return (
        <div className="relative" >

            <input ref={ref} type="radio" {...props} className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
            <div className={twMerge( `border   px-6 py-1 peer-checked:bg-green-900 rounded-full border-gray-400 peer-checked:font-bold peer-checked:text-white`, descriptionStyle )}>
                <p >{description}</p>
            </div>
        </div >
    )
} )

export default FieldInputRadio