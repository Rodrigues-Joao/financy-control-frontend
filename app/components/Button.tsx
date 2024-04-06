import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

}

export default function Button( { ...props }: ButtonProps )
{
    return (
        <button className={twMerge( "mx-4 rounded-md py-2 bg-blue-400  ", props.className )}{...props}></button>

    )
}