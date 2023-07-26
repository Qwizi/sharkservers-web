import {redirect} from "next/navigation";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Section from "@/components/Elements/Section";
import LoginForm from "@/components/Auth/LoginForm";

const isUserLogged = async () => {
    const session: Session | null = await getServerSession(authOptions)
    return session?.user?.username
}

export default async function LoginPage() {
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
                                    <h4>Zaloguj się</h4>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}