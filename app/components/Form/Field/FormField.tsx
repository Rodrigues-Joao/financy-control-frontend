import { Children, ReactNode } from "react"

interface FormFieldDescriptionProps
{
    children: ReactNode
}

export default function FormDescriptionRoot( { children }: FormFieldDescriptionProps )
{
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}