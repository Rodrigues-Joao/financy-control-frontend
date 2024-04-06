import { ReactNode } from "react"

interface ItemListContentProps
{
    children: ReactNode
}
export default function ItemListContent( { children }: ItemListContentProps )
{
    return (
        <div className="">

            {children}

        </div>
    )
}