import { ReactNode, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
var currencyFormatter = require( 'currency-formatter' );
type CurrencyNumberType = HtmlHTMLAttributes<HTMLElement> & {
    value: number,

}
export default function CurrencyNumber( { value, ...props }: CurrencyNumberType )
{
    const color = value < 0 ? 'text-red-600' : '';
    return (
        <span className={twMerge( "text-md font-bold dark:text-white", props.className, color )}>{currencyFormatter.format( value, { code: 'BRL' } )}</span>
    )

}