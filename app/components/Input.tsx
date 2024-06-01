import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Input()
{
    return (
        <div className="mx-4  my-4 md:w-2/3 flex items-center  rounded border border-1 border-gray-500 ">
            <FontAwesomeIcon className="w-10 right-4  absolute" icon={faSearch} color="gray" />
            <input className="w-full py-2 px-2  border-none bg-transparent" placeholder="Pesquisar">
            </input>
        </div>
    )

}