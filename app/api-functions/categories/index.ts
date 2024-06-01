import { api } from "@/app/lib/axios"
import { CreateCategory, ResponseCategoriesType } from "@/app/types/categories"
import { ResponseCreated } from "@/app/types/generic"


const Get = async ( userId: number ): Promise<ResponseCategoriesType> =>
{
    return ( await api.get( `/categories?userId=${ userId }` ) ).data as ResponseCategoriesType
}
const Post = async ( payload: CreateCategory ): Promise<ResponseCreated> =>
{
    const res = await api.post( "/categories", payload )
    return res.data as ResponseCreated
}

const Categories = {
    Get
}


export default Categories