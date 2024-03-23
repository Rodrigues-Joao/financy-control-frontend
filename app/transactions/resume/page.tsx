'use client'
import DetailResultCard from "@/app/components/DetailResultCard";
import Header from "@/app/components/Header";
import TransactionItemList from "@/app/components/TransactionItemList";

import { api } from "@/app/lib/axios";
import { ResponseTransactionsType, TransactionType } from "@/app/types/transactions";


export default async function Resume()
{
    const response = await api.get( "/transactions?userId=1&currentMonth=3" )
    const responseTransactions: ResponseTransactionsType = response.data
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    function handleClickTransaction( transaction: TransactionType ): void
    {
        console.log( `${ transaction.description }` );
    }
    return (
        <div className="flex flex-col min-h-scre  ">
            <Header title="Extrato"></Header>
            <div className="px-4 w-full my-4 md:w-2/3"> <input className="w-full h-10 rounded-md"></input></div>
            <div className="flex flex-row px-4  w-full  md:w-2/3">
                <h1 className="text-xl">Resumo do mês {monthNames[new Date().getMonth()]}</h1>
            </div>
            <div className="flex flex-col mx-auto justify-center  px-4 w-full  ">

                <div className="grid grid-cols-2 gap-2 ">
                    <DetailResultCard amount={responseTransactions.TotalIncome} ></DetailResultCard>
                    <DetailResultCard isGain={false} amount={responseTransactions.TotalExpenses}></DetailResultCard>
                </div>
                <TransactionItemList data={responseTransactions.transactions} handleClick={handleClickTransaction} ></TransactionItemList>


            </div>
        </div >
    )
}


