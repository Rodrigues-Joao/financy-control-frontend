import { ReactNode } from "react"

interface ItemListRootProps
{
    children: ReactNode
}
export default function ListRoot( { children }: ItemListRootProps )
{
    return (
        <ul className="dark:text-white md:w-2/3  w-full mx-auto">
            {children}
        </ul>
    )
}