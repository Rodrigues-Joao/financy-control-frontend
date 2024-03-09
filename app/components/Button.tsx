import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

}

export default function Button( { ...props }: ButtonProps )
{
    return (
        <button className="w-1/4 rounded-md py-2 bg-blue-400 " {...props}></button>
    )
}