'use client'
import { FormHTMLAttributes, ReactNode, forwardRef, useState } from "react"
import { useForm } from "react-hook-form"
import Field from "./Field/Index"
import { ResponseAccountsType } from "@/app/types/accounts"
import { ResponseCategoriesType } from "@/app/types/categories"
import { api } from "@/app/lib/axios";
import { twMerge } from "tailwind-merge"

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement>
{
    // accounts: ResponseAccountsType
    // categories: ResponseCategoriesType
    children: ReactNode
}

//forwardRef<HTMLInputElement, InputRadioProps>( function FieldInputRadio( { description, descriptionStyle, ...props }: InputRadioProps, ref )

const FormRoot = forwardRef<HTMLFormElement, FormRootProps>( function FormRoot( { children, ...props }: FormRootProps, ref )
{

    return (
        <form ref={ref} {...props} className={twMerge( "m-4 flex flex-col gap-4 w-full", props.className )} >
            {children}
        </form >
    )
} )

export default FormRoot