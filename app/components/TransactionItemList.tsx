
import { TransactionType } from "../types/transactions";
import List from "./List/Index";

interface TransactionItemListProps
{
    data: TransactionType[],

}
export default function TransactionItemList( { data }: TransactionItemListProps )
{
    function handleClickTransaction( transaction: TransactionType ): void
    {

        console.log( `${ transaction.description }` );
    }
    return (

        <List.Root>
            {
                data.map( ( transaction ) =>
                (
                    <List.Item onClick={() => handleClickTransaction( transaction )} key={transaction.id}>
                        <List.Content>
                            <List.ContentTitle title={transaction.description} detail={`${ transaction.current_installments }/${ transaction.installments }`}></List.ContentTitle>
                            <List.ContentSubtitle subtitle={`${ transaction.Category.category } | ${ transaction.PaymentType.type }`} />
                        </List.Content>
                        <List.Detail description={transaction.amount} style={transaction.TransactionsType.id == 1 ? 'dark:text-red-500 text-red-500' : transaction.TransactionsType.id == 2 ? 'dark:text-green-500 text-green-500' : ''} />
                    </List.Item>
                ) )
            }
        </List.Root>

    )
}