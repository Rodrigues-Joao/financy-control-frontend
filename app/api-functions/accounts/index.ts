import { api } from "@/app/lib/axios"
import { ResponseAccountsType } from "@/app/types/accounts"


const Get = async ( userId: number ): Promise<ResponseAccountsType> =>
{
    return ( await api.get( `/accounts?userId=${ userId }` ) ).data as ResponseAccountsType
}


const Accounts = {
    Get
}


export default Accounts