import { HtmlHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ItemListProps extends HtmlHTMLAttributes<HTMLElement>
{
    children: ReactNode
}

export default function ItemList( { children, ...props }: ItemListProps )
{
    return (
        <li {...props} className={twMerge( `flex flex-row justify-between p-2  items-center border-b border-b-gray-300 hover:cursor-pointer `, props.className )}>
            {children}
        </li >
    )
}