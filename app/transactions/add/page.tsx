import Header from "@/app/components/Header";

export default function Add()
{
    return (
        <div className="flex flex-col min-h-scre  ">
            <Header title="Registrar Gasto"></Header>
            <div className="flex gap-2">

                <div className={`relative bg-green-300 rounded-full`}>

                    <input className="bg-transparent hover:cursor-pointer m-0  z-[2] absolute w-full h-full opacity-0" type="radio" />
                    <p className="px-3 text-sm">Gastos</p>
                </div>
                <div className={`relative bg-green-300 rounded-full`}>

                    <input className="bg-transparent hover:cursor-pointer m-0  z-[2] absolute w-full h-full opacity-0" type="radio" />
                    <p className="px-3 text-sm">Gastos</p>
                </div>
                <div className={`relative bg-green-300 rounded-full`}>

                    <input className="bg-transparent hover:cursor-pointer m-0  z-[2] absolute w-full h-full opacity-0" type="radio" />
                    <p className="px-3 text-sm">Gastos</p>
                </div>


            </div>
        </div>
    )
}