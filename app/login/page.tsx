'use client'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Field from "../components/Form/Field/Index";
import Form from "../components/Form/Index";
import { FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AccessControl from "../api-functions/accessControl";
import { userLoginSchema, UserLoginSchema } from "../types/accessControl";


export default function Login()
{
    const [showPassword, setShowPassword] = useState<boolean>( false )

    const {
        handleSubmit, register, formState: { errors },
    } = useForm<UserLoginSchema>( {
        resolver: zodResolver( userLoginSchema ),
    } )

    async function handleUserLogin( data: UserLoginSchema )
    {
        console.log( "teste" )
        let result = await AccessControl.Login( data )
        console.log( result.statusCode )
        console.log( result.message )
    }

    return (
        <div className="flex min-h-screen  ">
            <div className="flex flex-col items-center mx-auto w-3/4 p-10  my-auto rounded-lg drop-shadow-lg border border-gray-700   ">
                <h1 className="text-2xl text-center">Faça seu login</h1>
                <div className="flex flex-col w-full h-full justify-around items-center">
                    <Form.Root onSubmit={handleSubmit( handleUserLogin )}>
                        <Field.Root>
                            <Field.Description >
                                Email
                            </Field.Description>
                            <Field.Input  {...register( "email" )} placeholder="jose@gmail.com"></Field.Input>
                            {errors.email?.message && <p className="text-red-800">{errors.email.message}</p>}
                        </Field.Root>
                        <Field.Root>
                            <Field.Description >
                                Senha
                            </Field.Description>
                            <Field.Input {...register( "password" )} type={showPassword ? "text" : "password"} icon={showPassword ? faEye : faEyeSlash} iconClick={() => { setShowPassword( prev => !prev ) }}></Field.Input>

                        </Field.Root>

                        <Button type="submit" >
                            ENTRAR
                        </Button>
                        <div className="flex flex-row items-end justify-center">
                            <a className="hover:underline text-sm hover:cursor-pointer">Esqueceu a senha?</a>
                        </div>
                    </Form.Root>
                </div>


            </div>
        </div >
    )
}