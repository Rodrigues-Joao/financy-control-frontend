import { api } from "@/app/lib/axios"
import { CreateCategory, ResponseCategoriesType } from "@/app/types/categories"
import { ResponseCreated } from "@/app/types/generic"


const Get = async ( userId: number ): Promise<ResponseCategoriesType> =>
{
    return ( await api.get( `/categories?userId=${ userId }` ) ).data as ResponseCategoriesType
}
const Create = async ( payload: CreateCategory ): Promise<ResponseCreated> =>
{
    const res = await api.post( "/categories", payload )
    const result: ResponseCreated = {
        message: res.data,
        statusCode: res.status
    }
    return result
}
const Categories = {
    Get,
    Create
}


export default Categories