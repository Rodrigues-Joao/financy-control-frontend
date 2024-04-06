'use client'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps
{
    title: string;
    navigation?: string
}

export default function Header( { title, navigation }: HeaderProps )
{
    return (
        <div className="bg-blue-400 py-3  flex " >
            {
                navigation &&

                <a href={navigation} className='ml-4 absolute' ><FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-center"></FontAwesomeIcon></a>
            }

            <p className="text-2xl  text-center  font-bold text-white mx-auto" > {title} </p>
        </div >
    )

}