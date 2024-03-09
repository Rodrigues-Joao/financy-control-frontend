import CurrencyNumber from "@/app/components/CurrencyNumber";
import DetailResultCard from "@/app/components/DetailResultCard";
import { api } from "@/app/lib/axios";
import { DateFormater } from "@/app/ultils/DateFormater";
type CategoryType = {
    id: number;
    category: string;
}

type AdjustmentsType = [
    {
        id: number;
        newAmount: number;
        newDate: string;
        isOnly: boolean;
    }
]

type ResponseTransactionsType = [
    {
        id: number;
        description: string;
        amount: number;
        isRecurrence: boolean;
        isConsolidated: boolean;
        paymentType: string;
        transactionsType: string;
        adjustments: AdjustmentsType;
        category: CategoryType;
        date: string;
    }
]

type ResumeProps = {
    response: ResponseTransactionsType;
}
export default async function Resume()
{
    const response = await api.get( "/transactions?userId=1&currentMonth=3" )
    const transactions: ResumeProps = response.data
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return (
        <div className="flex min-h-screen ">
            <div className="flex flex-col mx-auto justify-center gap-4 p-10 bg-slate-200">
                <div className="flex flex-row gap-2">
                    <h1 className="text-xl">Resumo do mês {monthNames[new Date().getMonth()]}</h1>
                    <input></input>
                </div>

                <div className="flex gap-8">
                    <DetailResultCard amount={0} ></DetailResultCard>
                    <DetailResultCard isGain={false} amount={0}></DetailResultCard>
                </div>

                <table>
                    <tr >

                        <th className="text-start ">Categoria</th>
                        <th className="text-start ">Descrição</th>
                        <th className="text-start ">Valor</th>
                        <th className="text-start ">Data</th>
                    </tr>
                    {
                        transactions.response.map( transaction =>
                        {
                            return (
                                <tr>
                                    <td>{transaction.category.category}</td>
                                    <td>{transaction.description}</td>
                                    <td><CurrencyNumber className="text-sm font-normal" value={transaction.amount}></CurrencyNumber></td>
                                    <td>{DateFormater( transaction.date )}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </table>
            </div>
        </div>
    )
}


