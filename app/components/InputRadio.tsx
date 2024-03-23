import { forwardRef, InputHTMLAttributes } from "react";

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement>
{
    description: string;
}

const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>( function InputRadio( { description, ...props }: InputRadioProps, ref )
{
    return (
        <div className="relative" >
            <input ref={ref} type="radio" {...props} className="peer bg-transparent hover:cursor-pointer m-0 z-[2] absolute w-full h-full opacity-0" />
            <div className=" border   px-6 py-1 peer-checked:bg-green-900 rounded-full border-gray-400 peer-checked:font-bold peer-checked:text-white ">
                <p className=" text-sm tracking-wider text-gray-300  ">{description}</p>
            </div>
        </div >
    )
} )

export default InputRadio