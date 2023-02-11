import React from 'react';
import Link from 'next/link';
import ThemeChanger from '../Common/ThemeChanger';

const Register = () => {
    return (
        <main>
            <section className="sign-up-area pt-130 pb-90" style={{ background: "url(assets/img/banner/oc-banner-bg.png)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-7 col-xl-8 col-lg-9">
                            <div className="sign-up-wrapper pos-rel mb-40 wow fadeInUp">
                                <div className="sign-up-inner">
                                    <div className="sign-up-content">
                                        <h4>Create Account</h4>
                                        <p className="mb-35">It's easy to create an account for Non-fungible tokens and sale your any items independently online securely in the world.</p>
                                        <form className="sign-up-form" action="#">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="m-id">Email</label>
                                                        <input type="email" name="m-id" id="m-id" placeholder="Your email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="u-name">Username</label>
                                                        <input type="text" name="u-name" id="u-name" placeholder="Username" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input-unit">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="password" name="password" id="password" placeholder="********" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sign-up-btn">
                                                <button className="fill-btn">Create Account</button>
                                                <div className="note">Already have an account? <Link href="/login" className="text-btn">Sign In</Link></div>
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