import { api } from "@/app/lib/axios"
import { UserLoginSchema } from "@/app/types/accessControl"
import { ResponseCreated } from "@/app/types/generic"
import { Axios, AxiosError } from "axios"



const Login = async ( payload: UserLoginSchema ): Promise<ResponseCreated> =>
{
    try
    {

        const res = await api.post( "access-control/login", payload )
        console.log( '=========================res' )
        console.log( res )
        console.log( '=========================res' )
        const result: ResponseCreated = {
            message: res.data,
            statusCode: res.status
        }
        return result
    }
    catch ( error: AxiosError | any )
    {

        const result: ResponseCreated = {
            message: error.response.data,
            statusCode: error.response.status
        }
        return result
    }
}
const AccessControl = {
    Login
}


export default AccessControl