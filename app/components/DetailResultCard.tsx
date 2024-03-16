import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrencyNumber from "./CurrencyNumber";

type DetailResultCardType = {
    isGain?: boolean,
    amount: number,


}

export default function DetailResultCard( { isGain = true, amount }: DetailResultCardType )
{
    const icon: IconProp = isGain ? faArrowTrendUp : faArrowTrendDown;
    const iconColor: string = isGain ? "green" : "red";
    return (
        <div className="flex  h-30 bg-white  dark:bg-gray-900 dark:border dark:border-gray-300 my-2 justify-around items-center rounded-md p-2 md:max-w-64 sm:max-w-32 ">

            <FontAwesomeIcon className="w-10" icon={icon} color={iconColor} />
            <div className="flex flex-col">
                <CurrencyNumber value={amount} />
                <p className="text-sm dark:text-white">{isGain ? "Ganhos" : "Gastos"} do mes</p>
            </div>
        </div>
    )
}