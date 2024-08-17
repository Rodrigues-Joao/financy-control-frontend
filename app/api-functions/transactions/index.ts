import { api } from "@/app/lib/axios"
import { ResponseCreated } from "@/app/types/generic"
import { CreateTransactionSchema } from "@/app/types/transactions"

const Create = async ( payload: CreateTransactionSchema ): Promise<ResponseCreated> =>
{
    const res = await api.post( "/transactions", payload )
    const result: ResponseCreated = {
        message: res.data,
        statusCode: res.status
    }
    return result
}
const Transactions = {

    Create
}


export default Transactions