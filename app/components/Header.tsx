'use client'
import { faArrowLeft, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import Menu from "./Menu";
import { useState } from "react";

interface HeaderProps
{
    title: string;
    navigation?: string
}

export default function Header( { title, navigation }: HeaderProps )
{
    const [visibleMenu, setVisibleMenu] = useState( false )

    return (
        <div className="bg-blue-400 py-3  flex   w-full" >
            <Modal id="menu" visible={visibleMenu} className={`w-10/12 h-full rounded-none  p-0 origin-left animate-open-menu }`} >
                <Menu closeMenu={() =>
                {
                    setVisibleMenu( false )

                }}>

                </Menu>
            </Modal>
            {
                navigation ?

                    <a href={navigation} className='ml-4 absolute' ><FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-center"></FontAwesomeIcon></a>
                    :
                    <FontAwesomeIcon onClick={() => setVisibleMenu( prev => !prev )} icon={faBars} size="2x" className="text-center ml-4 absolute"></FontAwesomeIcon>
            }

            <p className="text-2xl  text-center  font-bold text-white mx-auto" > {title} </p>
        </div >
    )

}