import Section from "@/components/Elements/Section";
import ActivateAccountForm from "@/components/Auth/ActivateAccountForm";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

const isUserLogged = async () => {
    const session: Session | null = await getServerSession(authOptions)
    return session?.user?.username
}
export default async function ActivateAccountPage() {
    const user_logged = await isUserLogged()
    if (user_logged) {
        redirect("/")
    }
    return (<>
            <Section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-12">
                            <div className="login-wrapper mb-40 wow fadeInUp">
                                <div className="login-inner">
                                    <div className="login-content">
                                        <h4>Aktywuj konto</h4>
                                        <ActivateAccountForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>)
}