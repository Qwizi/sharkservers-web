'use client';
import React, {useState} from "react";
import {useSession} from "next-auth/react";
import {AuthPostApi} from "@/lib/fetchApi";
import {useRouter} from "next/navigation";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Section from "@/components/Elements/Section";

const RegisterMain = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const {data: session} = useSession()
    const router = useRouter()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Zarejestrowano!")
        const res = await AuthPostApi('/v1/auth/register', JSON.stringify({
            email: email,
            username: username,
            password: password,
            password2: password2,
        }), session)
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const data = await res.json()
        router.push(`/auth/register/success`)
    }

    return (
        <>
            <Section>
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                            <div className="login-wrapper pos-rel mb-40 wow fadeInUp">
                                <div className="login-inner">
                                    <div className="login-content">
                                        <h4>Zarejestruj się</h4>
                                        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="email">E-mail</label>
                                                        <input type="email" id="email" placeholder="E-mail"
                                                               value={email}
                                                               onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>
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
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="password2">Powtórz Hasło</label>
                                                        <input type="password" id="password2"
                                                               placeholder="Powtórz hasło" value={password2}
                                                               onChange={(e) => setPassword2(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="login-btn">
                                                <button className="fill-btn" type="submit">Zarejestruj sie</button>
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

export default RegisterMain;