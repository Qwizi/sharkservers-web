'use client';
import React from 'react';
import Link from 'next/link';
import ThemeChanger from '../Common/ThemeChanger';
//import Breadcrumbs from '../Common/PageTitle';

const LoginMain = () => {

    return (
        <main>
            <section className="login-area pt-130 pb-90" style={{ background: "url(assets/img/banner/oc-banner-bg.)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                            <div className="login-wrapper pos-rel mb-40 wow fadeInUp">
                                <div className=" login-inner">
                                    <div className="login-content">
                                        <h4>Zaloguj sie</h4>
                                        <form className="login-form" action="#">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="m-id">Nazwa użytkownika</label>
                                                        <input type="text" name="m-id" id="m-id" placeholder="Nazwa użytkownika" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="password">Hasło</label>
                                                        <input type="password" name="password" id="password" placeholder="********" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="login-btn">
                                                <button className="fill-btn">Zaloguj sie</button>
                                                <div className="note">Nie posiadasz konta? <Link href="/register">Zarejestruj się</Link></div>
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

export default LoginMain;