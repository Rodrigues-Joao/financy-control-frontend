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
        <span className={twMerge( "text-2xl font-bold", props.className, color )}>{currencyFormatter.format( value, { code: 'BRL' } )}</span>
    )

}