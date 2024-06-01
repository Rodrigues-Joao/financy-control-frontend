

import Accounts from "@/app/api-functions/accounts";
import Categories from "@/app/api-functions/categories";
import AddTransaction from "@/app/components/AddTransaction";
import Header from "@/app/components/Header";
import { api } from "@/app/lib/axios";
import { ResponseAccountsType } from "@/app/types/accounts";
import { ResponseCategoriesType } from "@/app/types/categories";
export default async function Add()
{
    const [resCategories, resAccounts] = await Promise.all( [
        Categories.Get( 1 ),
        Accounts.Get( 1 ),
    ] );
    const categories = resCategories;
    const accounts = resAccounts;
    return (
        <>
            <Header navigation="/transactions/resume" title={`Registrar transação`}></Header>
            <div className="flex flex-col min-h-screen">

                <AddTransaction categories={categories} accounts={accounts}></AddTransaction>
            </div>
        </>
    )
}