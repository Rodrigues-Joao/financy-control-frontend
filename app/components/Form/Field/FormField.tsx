import { Children, HtmlHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface FormFieldDescriptionProps extends HtmlHTMLAttributes<HTMLElement>
{
    children: ReactNode
}

export default function FormDescriptionRoot( { children, ...props }: FormFieldDescriptionProps )
{
    return (
        <div className={twMerge( `flex flex-col gap-2 ${ props.className }` )}{...props}>
            {children}
        </div>
    )
}