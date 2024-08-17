import { z } from "zod"

export const userLoginSchema = z.object( {
    email: z.string().email( { message: "informe um email válido" } ),
    password: z.string().min( 1, { message: "Preencha sua senha" } )
} )

export type UserLoginSchema = z.infer<typeof userLoginSchema>