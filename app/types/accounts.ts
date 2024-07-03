import { z } from "zod";

export type ResponseAccountsType = {
    accounts: AccountType[]
}

export type AccountType = {
    id: number;
    name: string;
    balance: number
}
export const CreateAccountSchema = z.object( {
    name: z.string(),
    balance: z.number(),
    userId: z.number(),
} )

export type CreateAccount = z.infer<typeof CreateAccountSchema>