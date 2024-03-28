import { forwardRef, InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { ResponseCategoriesType } from "@/app/types/categories";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>
{
    children: ReactNode
}

const FieldSelect = forwardRef<HTMLSelectElement, SelectProps>( function FieldSelect( { children, ...props }: SelectProps, ref )
{

    return (
        <select ref={ref} {...props} className="bg-transparent placeholder:text-gray-300 text-md border border-gray-700  px-2 py-3 rounded" >
            {children}


        </select >
    )
} )

export default FieldSelect
