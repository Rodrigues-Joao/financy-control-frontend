
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
