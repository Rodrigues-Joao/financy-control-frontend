import { faAngleLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface ModalProps 
{
    children: ReactNode;
    visible: boolean;
    backButtonVisible: boolean;
    backNavigation: () => void
}
export default function Modal( { children, visible = false, backNavigation, backButtonVisible = false }: ModalProps )
{

    if ( !visible ) return null
    return (

        <div className="fixed  inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center" >
            <div className="bg-gray-900 w-11/12 h-5/6 rounded-md flex flex-col items-center p-4  relative">
                {
                    backButtonVisible &&
                    <FontAwesomeIcon onClick={backNavigation} className="absolute left-4 top-2 hover:cursor-pointer" icon={faAngleLeft} color="gray" size="2x"></FontAwesomeIcon>
                }
                {/* <FontAwesomeIcon onClick={closeModal} className={`absolute right-4 top-2 hover:cursor-pointer `} icon={faClose} color="red" size="2x"></FontAwesomeIcon> */}

                {children}
            </div>
        </div>
    )

}