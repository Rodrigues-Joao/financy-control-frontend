'use client'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import FieldDescription from "../components/Form/Field/FieldDescription";
import Input from "../components/Form/Field/FieldInput";
import FormField from "../components/Form/Field/FormField";
import Field from "../components/Form/Field/Index";
import FormRoot from "../components/Form/FormRoot";
import Form from "../components/Form/Index";
import { useState } from "react";

export default function Login()
{
    const [showPassword, setShowPassword] = useState<boolean>( false )
    return (
        <div className="flex min-h-screen  ">
            <div className="flex flex-col items-center mx-auto w-2/3 p-10 h-96 my-auto rounded-lg drop-shadow-lg ">
                <h1 className="text-2xl text-center">Faça seu login</h1>
                <div className="flex flex-col w-full h-full justify-around items-center">
                    <Form.Root >
                        <Field.Root>
                            <Field.Description >
                                Email
                            </Field.Description>
                            <Field.Input></Field.Input>

                        </Field.Root>
                        <Field.Root>
                            <Field.Description >
                                Senha
                            </Field.Description>
                            <Field.Input type={showPassword ? "text" : "password"} icon={showPassword ? faEye : faEyeSlash} iconClick={() => { setShowPassword( prev => !prev ) }}></Field.Input>

                        </Field.Root>
                        <Button type="submit">
                            ENTRAR
                        </Button>
                    </Form.Root>
                </div>
            </div>
        </div >
    )
}