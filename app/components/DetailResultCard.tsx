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
        <div className="flex w-30 h-30 bg-white justify-around items-center rounded-md p-2 w-64">
            <FontAwesomeIcon className="w-10" icon={icon} color={iconColor} />
            <div className="flex flex-col">
                <CurrencyNumber value={amount} />
                <p className="text-sm">{isGain ? "Ganhos" : "Gastos"} do mes</p>
            </div>
        </div>
    )
}