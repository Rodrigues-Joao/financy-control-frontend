interface ItemListContentSubtitleProps
{
    subtitle: string

}

export default function ItemListContentSubtitle( { subtitle }: ItemListContentSubtitleProps )
{
    return (
        <div className="flex">
            <p className="text-sm">{subtitle}</p>
        </div> )
}