
interface HeaderProps
{
    title: string;
    navigation?: boolean
}

export default function Header( { title, navigation }: HeaderProps )
{
    return (
        <div className="bg-blue-400 py-3 flex flex-col items-center " >
            <p className="text-2xl font-bold text-white" > {title} </p>
        </div >
    )

}