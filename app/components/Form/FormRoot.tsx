'use client'
import { FormHTMLAttributes, ReactNode, useState } from "react"
import { useForm } from "react-hook-form"
import Field from "./Field/Index"
import { ResponseAccountsType } from "@/app/types/accounts"
import { ResponseCategoriesType } from "@/app/types/categories"
import { api } from "@/app/lib/axios";

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement>
{
    // accounts: ResponseAccountsType
    // categories: ResponseCategoriesType
    children: ReactNode
}

export default function FormRoot( { children, ...props }: FormRootProps )
{

    return (
        <form {...props} className="m-4 flex flex-col gap-4" >
            {children}
        </form >
    )
}

