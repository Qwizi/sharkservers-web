import Section from "@/components/Elements/Section";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
const isUserLogged = async () => {
    const session: Session | null = await getServerSession(authOptions)
    return session?.user?.username
}

export default async function SuccessRegistrationPage() {
    const user_logged = await isUserLogged()
    if (user_logged) {
        redirect("/")
    }

    return (
        <>
            <Section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <div className="about-tab-contents mb-0 wow fadeInUp">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="tab-nav1" role="tabpanel"
                                         aria-labelledby="nav-tab1">
                                        <div className="about-info-wrapper mb-30">
                                            <h4 className="about-info-title">Rejestracja zakończona pomyślnie</h4>
                                            <p>Drogi użytkowniku, serdecznie witamy na naszej stronie! Cieszymy się, że zdecydowałeś/aś się
                                                dołączyć do naszej społeczności. Chcielibyśmy poinformować Cię, że
                                                właśnie
                                                wysłaliśmy wiadomość e-mail na podany przez Ciebie adres.</p>
                                            <p>W tej wiadomości znajduje się ważny kod aktywacyjny, który umożliwi Ci
                                                pełne korzystanie z naszych usług. Aby dokończyć proces rejestracji,
                                                proszę sprawdzić swoją skrzynkę odbiorczą i znaleźć naszą wiadomość.
                                                Jeśli nie widzisz jej w głównej skrzynce, upewnij się, że sprawdziłeś/aś
                                                folder spamu lub inną zakładkę.</p>

                                            <p>Gdy już otrzymasz kod aktywacyjny, proszę postępować zgodnie z
                                                instrukcjami podanymi w wiadomości e-mail, aby aktywować swoje konto. Po
                                                aktywacji będziesz mógł/mogła cieszyć się pełnymi możliwościami naszej
                                                platformy i skorzystać z wszystkich jej funkcji.</p>

                                            <p>Jeśli nie otrzymasz wiadomości w ciągu kilku minut, proszę skontaktuj się
                                                z
                                                naszym zespołem wsparcia, a pomożemy Ci rozwiązać ten problem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}