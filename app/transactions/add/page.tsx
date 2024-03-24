
import Header from "@/app/components/Header";
import React from 'react';
import Form from "@/app/components/Form/Index";
import { api } from "@/app/lib/axios";
import { ResponseCategoriesType } from "@/app/types/categories";
import { ResponseAccountsType } from "@/app/types/accounts";


export default async function Add()
{
    const defaultTransactionsType = "expenses"
    const [resCategories, resAccounts] = await Promise.all( [
        api.get( "/categories?userId=1" ),
        api.get( "/accounts?userId=1" )
    ] );
    const categories: ResponseCategoriesType = resCategories.data;
    const accounts: ResponseAccountsType = resAccounts.data;
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Registrar Gasto"></Header>
            <Form.Root categories={categories} accounts={accounts} />

        </div>
    )
}