import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Input, { InputProps } from "../../Input";



const FieldInput = forwardRef<HTMLInputElement, InputProps>( function FieldInput( { type = "text", icon, iconColor, ...props }: InputProps, ref )
{
    return (
        <Input {...props} ref={ref} type={type} icon={icon} iconColor={iconColor} />
    )
} )

export default FieldInput