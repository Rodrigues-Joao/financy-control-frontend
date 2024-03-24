import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{

}


const FieldInput = forwardRef<HTMLInputElement, InputProps>( function FieldInput( { type = "text", ...props }: InputProps, ref )
{
    return (
        <input {...props} ref={ref} type={type} className={twMerge( ` rounded bg-transparent placeholder:text-gray-300 text-md border border-gray-700  px-2 py-3  ${ props.className }` )} />
    )
} )

export default FieldInput