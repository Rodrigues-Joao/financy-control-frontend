import { ReactNode } from "react";

interface ModalProps
{
    children: ReactNode;
    visible: boolean;
}
export default function Modal( { children, visible = false }: ModalProps )
{

    if ( !visible ) return null
    return (

        <div className="fixed  inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-gray-900 w-11/12 h-5/6 rounded-md flex flex-col items-center  ">

                {children}
            </div>
        </div>
    )

}