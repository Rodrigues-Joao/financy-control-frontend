import { HtmlHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ItemListContentProps extends HtmlHTMLAttributes<HTMLElement>
{
    children: ReactNode
}
export default function ItemListContent( { children, ...props }: ItemListContentProps )
{
    return (
        <div {...props} className={twMerge( "flex flex-col", props.className )}>

            {children}

        </div>
    )
}