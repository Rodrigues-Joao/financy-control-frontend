import { api } from "@/app/lib/axios"
import { CreateAccount, ResponseAccountsType } from "@/app/types/accounts"
import { ResponseCreated } from "@/app/types/generic"


const Get = async ( userId: number ): Promise<ResponseAccountsType> =>
{
    const res = ( await api.get( `/accounts?userId=${ userId }` ) ).data as ResponseAccountsType
    console.log( res )
    return res
}
const Create = async ( payload: CreateAccount ): Promise<ResponseCreated> =>
{
    const res = await api.post( "/accounts", payload )
    const result: ResponseCreated = {
        message: res.data,
        statusCode: res.status
    }
    return result
}

const Accounts = {
    Get,
    Create
}


export default Accounts