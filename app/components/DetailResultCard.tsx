import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailResultCard()
{
    return (
        <div className="flex w-30 h-30 bg-white gap-4 justify-around items-center rounded-md p-2 w-64">
            <FontAwesomeIcon className="w-10" icon={faArrowTrendUp} color="green" />

            <div className="flex flex-col ">
                <p>R$1000,00</p>
                <p >Ganho do mes</p>
            </div>
        </div>
    )
}