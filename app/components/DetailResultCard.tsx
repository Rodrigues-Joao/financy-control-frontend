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
        <div className="grid grid-cols-[40px_1fr] gap-2 h-30 bg-white  dark:bg-gray-900 dark:border box-content dark:border-gray-300 my-2 justify-around items-center rounded-md p-2">
            <div className="w-full">
                <FontAwesomeIcon icon={icon} color={iconColor} size="2x" />
            </div>

            <div className="">
                <CurrencyNumber value={amount} />
                <p className="text-sm dark:text-white">{isGain ? "Ganhos" : "Gastos"} do mes</p>
            </div>
        </div>
    )
}