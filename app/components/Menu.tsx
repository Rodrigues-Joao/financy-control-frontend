'use client'
import { faBuildingColumns, faChartSimple, faClose, faGraduationCap, faHouse, faLayerGroup, faPlusCircle, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "./List/Index";
import Link from "next/link";

interface MenuProps
{
    closeMenu: () => void
}

export default function Menu( { closeMenu }: MenuProps )
{

    return (
        <>
            <div className=" py-3  flex   w-full" >
                <FontAwesomeIcon onClick={closeMenu} icon={faClose} size="2x" className="text-center ml-4 absolute"></FontAwesomeIcon>
                <p className="text-2xl  text-center  font-bold text-white mx-auto" > Menu </p>

            </div >

            <nav className="w-full px-4">
                <List.Root>
                    <Link href={'/'}>
                        <List.Item key={1} className="mt-2  rounded-md justify-normal" >
                            <List.Icon icon={faHouse} color='white'></List.Icon>
                            <List.Content>
                                <List.ContentTitle title="Home"></List.ContentTitle>
                            </List.Content>
                        </List.Item>
                    </Link>
                    <Link href={'/transactions/add'}>
                        <List.Item key={2} className="mt-2  rounded-md justify-normal" >
                            <List.Icon icon={faPlusSquare} color='white'></List.Icon>
                            <List.Content>
                                <List.ContentTitle title="Adiconar transação"></List.ContentTitle>
                            </List.Content>
                        </List.Item>
                    </Link>
                    <Link href={'/transactions/resume'}>
                        <List.Item key={2} className="mt-2  rounded-md justify-normal" >
                            <List.Icon icon={faChartSimple} color='white'></List.Icon>
                            <List.Content>
                                <List.ContentTitle title="Resumo"></List.ContentTitle>
                            </List.Content>
                        </List.Item>
                    </Link>
                    <Link href={'/categories'}>
                        <List.Item key={2} className="mt-2  rounded-md justify-normal" >
                            <List.Icon icon={faLayerGroup} color='white'></List.Icon>
                            <List.Content>
                                <List.ContentTitle title="Categorias"></List.ContentTitle>
                            </List.Content>
                        </List.Item>
                    </Link>
                    <Link href={'/accounts'}>
                        <List.Item key={2} className="mt-2  rounded-md justify-normal" >
                            <List.Icon icon={faBuildingColumns} color='white'></List.Icon>
                            <List.Content>
                                <List.ContentTitle title="Contas"></List.ContentTitle>
                            </List.Content>
                        </List.Item>
                    </Link>
                </List.Root>
            </nav>

        </>
    )
}