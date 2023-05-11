'use client';
import {useState} from "react";
import {signIn} from "next-auth/react";

const LoginMain = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // @ts-ignore
    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await signIn('credentials', {
            username: username,
            password: password,
            redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <>
            <section className="login-area pt-130 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                            <div className="login-wrapper pos-rel mb-40 wow fadeInUp">
                                <div className="login-inner">
                                    <div className="login-content">
                                        <h4>Zaloguj się</h4>
                                        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="single-input-unit">
                                                    <label htmlFor="username">Nazwa użytkownika</label>
                                                    <input type="text" id="username" placeholder="Nazwa użytkownika" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input-unit">
                                                    <label htmlFor="password">Hasło</label>
                                                    <input type="password" id="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                </div>
            </section>
        </>
    )
}

export default LoginMain