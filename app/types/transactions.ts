import { z } from "zod";

export type CategoryType = {
    id: number;
    category: string;
}

export type AdjustmentsType = [
    {
        id: number;
        newAmount: number;
        newDate: string;
        isOnly: boolean;
    }
]

export type PaymentType = {
    id: number, type: string
}
export type TransactionsType = {
    id: number, type: string
}

export type AdjustmentType = [{
    id: number;
    newAmount: number;
    newDate: string;
    isOnly: boolean;
}]
export type TransactionType = {
    id: number;
    description: string;
    amount: number;
    installments: number;
    current_installments: number;
    isConsolidated?: boolean;
    isRecurrence: boolean;
    date: string;
    Adjustments: AdjustmentType,
    PaymentType: PaymentType;
    TransactionsType: TransactionsType;
    Category: CategoryType;
}
export type ResponseTransactionsType =
    {
        TotalIncome: number;
        TotalExpenses: number;
        transactions: TransactionType[]
    }

export const createTransactionSchema = z.object( {
    paymentMethod: z.string(),
    description: z.string( { required_error: "Descrição é necessária" } ).min( 1, { message: "Coloque uma descrição" } ),
    amount: z.number( { required_error: "Coloque um valor" } ).min( 0.01 ),
    installments: z.coerce.number().default( 1 ),
    isRecurrence: z.boolean().default( false ),
    paymentTypeId: z.coerce.number(),
    transactionsTypeId: z.coerce.number(),
    accountsId: z.coerce.number(),
    userId: z.number().default( 1 ),
    categoryId: z.coerce.number(),
    date: z.string()
} )
export type CreateTransactionSchema = z.infer<typeof createTransactionSchema>