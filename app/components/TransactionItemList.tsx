
import { TransactionType } from "../types/transactions";
import { DateFormater } from "../ultils/DateFormater";
import CurrencyNumber from "./CurrencyNumber";

interface TransactionItemListProps
{
    data: TransactionType[],
    handleClick?: ( transaction: TransactionType ) => void;
}

export default function TransactionItemList( { data, handleClick }: TransactionItemListProps )
{
    return (
        <ul className="dark:text-white">
            {
                data.map( ( transaction, index ) =>
                {

                    const isPair = index % 2 == 0 ? true : false;
                    return (
                        <li className={`flex flex-row justify-between p-2  items-center border-b border-b-gray-300 hover:cursor-pointer  ${ isPair ? 'dark:bg-gray-800' : 'dark:bg-gray-700' }`} key={transaction.id} onClick={() => handleClick( transaction )}>
                            <div>
                                <div className="flex items-center gap-1">
                                    <p className="text-lg font-bold">{transaction.description}</p>
                                    <p className={`text-sm font-normal ${ transaction.isRecurrence ? 'invisible' : '' }`}>{transaction.current_installments}/{transaction.installments}</p>
                                </div>
                                <div className="flex">
                                    <p className="text-sm">{transaction.Category.category}</p>
                                    <p className="mx-1 text-sm">|</p>
                                    <p className="text-sm">{transaction.PaymentType.type}</p>
                                </div>

                            </div>
                            <div className="flex flex-col items-end">
                                <p className=""><CurrencyNumber className={`text-xl font-bold ${ transaction.TransactionsType.id == 1 ? 'dark:text-red-500 text-red-500' : '' }`} value={transaction.amount}></CurrencyNumber></p>
                                <p className="text-sm">{DateFormater( transaction.date )}</p>
                            </div>

                        </li>
                    )
                }
                )
            }
        </ul>

    )
}