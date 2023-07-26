'use client';
import {useForm} from "react-hook-form";
import {signIn, SignInResponse} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import Link from "next/link";

const LoginForm = () => {
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const searchParams = useSearchParams();
    const [isValid, setIsValid] = useState(false)
    const [invalidCredentialsError, setInvalidCredentialsError] = useState(false)
    useEffect(() => {
        if (isValid) {
            const callback = searchParams.get("callbackUrl")
            router.push(callback || "/")
        }
    }, [isValid])

    const onSubmit = async (data: any) => {
        const response: SignInResponse | undefined = await signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: false,
        })
        if (response?.ok && !response.error) {
            setIsValid(true)
        } else {
            setInvalidCredentialsError(true)
        }
    };

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {invalidCredentialsError && (
                        <div className="col-md-12">
                            <div className="alert alert-danger" role="alert">
                                Niepoprawne dane logowania
                            </div>
                        </div>
                    )}
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label htmlFor="username">Nazwa użytkownika</label>
                            {errors?.username?.type === "required" &&
                                <span className="text-danger">Pole jest wymagane</span>}
                            {errors?.username?.type === "minLength" &&
                                <span className="text-danger">Pole musi zawierać minimum 3 znaki</span>}
                            {errors?.username?.type === "maxLength" &&
                                <span className="text-danger">Pole musi zawierać maksimum 32 znaki</span>}
                            <input type="text" id="username" placeholder="Nazwa użytkownika"
                                   {...register("username", {required: true, minLength: 3, maxLength: 32})}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label htmlFor="password">Hasło</label>
                            {errors?.password?.type === "required" &&
                                <span className="text-danger">Pole jest wymagane</span>}
                            {errors?.password?.type === "minLength" &&
                                <span className="text-danger">Pole musi zawierać minimum 6 znaków</span>}
                            <input type="password" id="password" placeholder="Hasło"
                                   {...register("password", {required: true, minLength: 6})}/>
                        </div>
                    </div>
                    <div className="login-btn">
                        <button className="fill-btn" type="submit">Zaloguj się</button>
                        <div className="note">Nie posiadasz konta? <Link href={"/auth/register"} className={"text-btn"}>Zarejestruj sie</Link>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default LoginForm