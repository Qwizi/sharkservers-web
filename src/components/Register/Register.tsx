'use client'
import React from 'react';
import Link from 'next/link';
import ThemeChanger from '../Common/ThemeChanger';
import axios from "axios";

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const resp = await axios.post("http://localhost/v1/auth/register", {
            email: email,
            username: username,
            password: password,
            password2: password2
        })
        console.log(resp)
    }

    return (
        <main>
            <section className="sign-up-area pt-130 pb-90" style={{ background: "url(assets/img/banner/oc-banner-bg.png)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-7 col-xl-8 col-lg-9">
                            <div className="sign-up-wrapper pos-rel mb-40 wow fadeInUp">
                                <div className="sign-up-inner">
                                    <div className="sign-up-content">
                                        <h4>Stwórz konto</h4>
                                        <p className="mb-35">It's easy to create an account for Non-fungible tokens and sale your any items independently online securely in the world.</p>
                                        <form className="sign-up-form" action="#" onSubmit={handleFormSubmit}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="m-id">Email</label>
                                                        <input type="email" name="m-id" id="m-id" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="u-name">Nazwa użytkownika</label>
                                                        <input type="text" name="u-name" id="u-name" placeholder="Nazwa uzytkownika" onChange={(e) => setUsername(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="password">Hasło</label>
                                                        <input type="password" name="password" id="password" placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
                                                    </div>
                                                </div>
                                                 <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="password">Powtórz hasło </label>
                                                        <input type="password" name="password" id="password" placeholder="********" onChange={(e) => setPassword2(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sign-up-btn">
                                                <button className="fill-btn">Zarejestruj się</button>
                                                <div className="note">Posiadasz konto? <Link href="/login" className="text-btn">Zaloguj sie</Link></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;