import { DateFormater } from "@/app/ultils/DateFormater";
import CurrencyNumber from "../CurrencyNumber";


interface ItemListDetailProps
{
    description: number
    style?: string
}

export default function ItemListDetail( { description, style }: ItemListDetailProps )
{
    return (
        <div className="flex flex-col items-end">

            <p className=""><CurrencyNumber className={`text-xl font-bold ${ style }`} value={description}></CurrencyNumber></p>
            {/* <p className="text-sm">{DateFormater( transaction.date )}</p> */}
        </div>
    )
}