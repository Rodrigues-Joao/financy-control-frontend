'use client'
import DetailResultCard from "@/app/components/DetailResultCard";
import Header from "@/app/components/Header";
import Input from "@/app/components/Input";
import TransactionItemList from "@/app/components/TransactionItemList";

import { api } from "@/app/lib/axios";
import { ResponseTransactionsType, TransactionType } from "@/app/types/transactions";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default async function Resume()
{
    const currentMonth = new Date().getMonth()
    console.log( currentMonth )
    const response = await api.get( `/transactions?userId=1&currentMonth=${ currentMonth }` )
    const responseTransactions: ResponseTransactionsType = response.data
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


    return (
        <div className="flex flex-col min-h-scre  ">
            <Header title="Extrato"></Header>
            <Input></Input>
            <div className="flex flex-row px-4  w-full  md:w-2/3">
                <h1 className="text-xl">Resumo do mês {monthNames[new Date().getMonth()]}</h1>
            </div>
            <div className="flex flex-col mx-auto justify-center  px-4 w-full  ">

                <div className="grid grid-cols-2 gap-2 ">
                    <DetailResultCard amount={responseTransactions.TotalIncome} ></DetailResultCard>
                    <DetailResultCard isGain={false} amount={responseTransactions.TotalExpenses}></DetailResultCard>
                </div>
                <TransactionItemList data={responseTransactions.transactions} ></TransactionItemList>


                <a className=" fixed bottom-10 right-10  z-1  " href="/transactions/add">      <FontAwesomeIcon className="bg-black rounded-full" icon={faPlusCircle} color="Green" size="4x" /></a>
            </div>
        </div >
    )
}


