'use client';
import {useEffect, useState} from "react";
import {signIn, SignInResponse} from "next-auth/react";
import {useDebugValue} from "preact/compat";
import {useRouter, useSearchParams} from "next/navigation";
import AlertMessage from "@/components/Elements/AlertMessage";
import Section from "@/components/Elements/Section";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {mockProviders} from "next-auth/client/__tests__/helpers/mocks";
import callbackUrl = mockProviders.github.callbackUrl;
import {login_user} from "@/lib/fetchApi";

const LoginMain = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const searchParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        const errorQuery = searchParams.get("error")
        if (!errorQuery) return
        if (errorQuery === "CredentialsSignin") {
            //setError("Niepoprawne dane logowania")
        }
    }, [searchParams])

    // @ts-ignore
    const onSubmit = async (e) => {
        e.preventDefault()
        const callback = searchParams.get("callbackUrl")
        const response = await login_user(username, password)
        if (!response.ok) return
        await router.push(callback || "/")
    }

    return (
        <>
            <Section>
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="login-wrapper pos-rel mb-40 wow fadeInUp">
                            <div className="login-inner">
                                <div className="login-content">
                                    <h4>Zaloguj się</h4>
                                    <form className="login-form" onSubmit={(e) => onSubmit(e)}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                {error && (<AlertMessage message={error} show={true} type={"danger"}/>)}
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input-unit">
                                                    <label htmlFor="username">Nazwa użytkownika</label>
                                                    <input type="text" id="username" placeholder="Nazwa użytkownika"
                                                           value={username}
                                                           onChange={(e) => setUsername(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input-unit">
                                                    <label htmlFor="password">Hasło</label>
                                                    <input type="password" id="password" placeholder="Hasło"
                                                           value={password}
                                                           onChange={(e) => setPassword(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-btn">
                                            <button className="fill-btn" type="submit">Zaloguj się</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default LoginMain