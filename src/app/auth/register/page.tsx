import {getServerSession, Session} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Section from "@/components/Elements/Section";
import React from "react";
import RegisterForm from "@/components/Auth/RegisterForm";

const isUserLogged = async () => {
    const session: Session | null = await getServerSession(authOptions)
    return session?.user?.username
}
export default async function RegisterPage() {
    const user_logged = await isUserLogged()
    if (user_logged) {
        redirect("/")
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
                                    <RegisterForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}