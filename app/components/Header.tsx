
interface HeaderProps
{
    title: string;
    navigation?: boolean
}

export default function Header( { title, navigation }: HeaderProps )
{
    return (
        <div className="bg-blue-400 py-3 " >
            <p className="text-2xl  text-center  font-bold text-white mx-auto" > {title} </p>
        </div >
    )

}