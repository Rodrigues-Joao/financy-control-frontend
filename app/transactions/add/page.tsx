

import AddTransaction from "@/app/components/AddTransaction";
import { api } from "@/app/lib/axios";
import { ResponseAccountsType } from "@/app/types/accounts";
import { ResponseCategoriesType } from "@/app/types/categories";
export default async function Add()
{
    const [resCategories, resAccounts] = await Promise.all( [
        api.get( "/categories?userId=1" ),
        api.get( "/accounts?userId=1" )
    ] );
    const categories: ResponseCategoriesType = resCategories.data;
    const accounts: ResponseAccountsType = resAccounts.data;
    return (
        <div className="flex flex-col min-h-screen">

            <AddTransaction categories={categories} accounts={accounts}></AddTransaction>
        </div>
    )
}