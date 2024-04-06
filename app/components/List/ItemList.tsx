import { HtmlHTMLAttributes, ReactNode } from "react"

interface ItemListProps extends HtmlHTMLAttributes<HTMLElement>
{
    children: ReactNode
}

export default function ItemList( { children, ...props }: ItemListProps )
{
    return (
        <li {...props} className={`flex flex-row justify-between p-2  items-center border-b border-b-gray-300 hover:cursor-pointe`}>
            {children}
        </li >
    )
}