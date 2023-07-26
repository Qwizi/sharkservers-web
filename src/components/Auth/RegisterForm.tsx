'use client';
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
import {useRouter, useSearchParams} from "next/navigation";

const RegisterForm = () => {
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}, setError, getValues} = useForm();
    const [isValid, setIsValid] = useState(false)
    const [invalidCredentialsError, setInvalidCredentialsError] = useState(false)
    useEffect(() => {
        if (isValid) {
            router.push("/auth/register/success")
        }
    }, [isValid])

    const onSubmit = async (data: any) => {
        try {
            const response = await shark_api.auth.register({
                username: data.username,
                email: data.email,
                password: data.password,
                password2: data.password_confirmation
            })
            setIsValid(true)
        } catch (e) {
            console.log(e)
            setInvalidCredentialsError(true)
        }
    }
    return (
        <>
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {invalidCredentialsError && (
                        <div className="col-md-12">
                            <div className="alert alert-danger" role="alert">
                                Uzytkownik o podanym adresie e-mail lub nazwie użytkownika już istnieje
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
                            {errors?.username?.type === "pattern" &&
                                <span className="text-danger">Pole może zawierać tylko litery, cyfry, znaki _ i -</span>}
                            <input type="text" id="username" placeholder="Nazwa użytkownika"
                                   {...register("username", {required: true, minLength: 3, maxLength: 32, pattern: /^[a-zA-Z0-9_-]+$/})}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label htmlFor="email">Adres e-mail</label>
                            {errors?.email?.type === "required" &&
                                <span className="text-danger">Pole jest wymagane</span>}
                            {errors?.email?.type === "pattern" &&
                                <span className="text-danger">Niepoprawny adres e-mail</span>}
                            <input type="email" id="email" placeholder="Adres e-mail"
                                   {...register("email", {
                                       required: true,
                                       pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                   })}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label htmlFor="password">Hasło</label>
                            {errors?.password?.type === "required" &&
                                <span className="text-danger">Pole jest wymagane</span>}
                            {errors?.password?.type === "minLength" &&
                                <span className="text-danger">Pole musi zawierać minimum 8 znaków</span>}
                            <input type="password" id="password" placeholder="Hasło"
                                   {...register("password", {required: true, minLength: 8})}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label htmlFor="password_confirmation">Powtórz hasło</label>
                            {errors?.password_confirmation?.type === "required" &&
                                <span className="text-danger">Pole jest wymagane</span>}
                            {errors?.password_confirmation?.type === "minLength" &&
                                <span className="text-danger">Pole musi zawierać minimum 8 znaków</span>}
                            {errors?.password_confirmation?.type === "validate" &&
                                <span className="text-danger">Hasła nie są takie same</span>}
                            <input type="password" id="password_confirmation" placeholder="Powtórz hasło"
                                   {...register("password_confirmation", {
                                       required: true,
                                       minLength: 8,
                                       validate: value => value == getValues("password")
                                   })}/>
                        </div>
                    </div>
                </div>
                <div className="login-btn">
                    <button className="fill-btn" type="submit">Zarejestruj się</button>
                </div>
            </form>
        </>
    )
}
export default RegisterForm