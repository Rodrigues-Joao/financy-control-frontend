import Button from "../components/Button";
import Input from "../components/Input";

export default function Login()
{
    return (
        <div className="flex min-h-screen ">
            <div className="flex flex-col items-center mx-auto w-6/12 p-10 h-96 my-auto rounded-lg drop-shadow-lg bg-slate-200">

                <h1 className="text-3xl ">Login</h1>
                <div className="flex flex-col w-full h-full justify-around items-center">
                    <Input></Input>
                    <Button >ENTRAR</Button>
                </div>
            </div>
        </div >
    )
}