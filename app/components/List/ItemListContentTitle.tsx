interface ItemListContentTitleProps
{
    title: string
    detail?: string
}

export default function ItemListContentTitle( { title, detail }: ItemListContentTitleProps )
{
    return (
        <div className="flex items-center gap-1">
            <p className="text-lg font-bold">{title}</p>
            <p className={`text-sm font-normal ${ detail ? 'invisible' : '' }`}>{detail}</p>
        </div>
    )
}