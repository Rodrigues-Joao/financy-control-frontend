import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export type InputProps =
    {
        icon?: IconProp
        iconColor?: string;
        iconClick?: () => void
    } & InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, InputProps>( function Input( { type = "text", iconClick, icon, iconColor = "gray", ...props }: InputProps, ref )
{
    return (
        <div className={`my-4 md:w-2/3 relative rounded border border-1 border-gray-500  ${ props.className }`}>
            {icon &&
                <FontAwesomeIcon className="w-6 absolute right-2 h-full hover:cursor-pointer" icon={icon} color={iconColor} onClick={iconClick} />
            }
            <input type={type} className={twMerge( `w-full h-full block py-2 px-2  border-none bg-transparent ` )}>
            </input>
        </div>
    )

} )
export default Input