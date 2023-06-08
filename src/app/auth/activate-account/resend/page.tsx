import ActivateAccountForm from "@/components/Auth/ActivateAccountForm";
import ResendActivationCodeForm from "@/components/Auth/ResendActivationCodeForm";

export default function ResendActivationCodePage() {
    return (
        <>
            <section className="login-area pt-100 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-12">
                            <div className="login-wrapper mb-40 wow fadeInUp">
                                <div className="login-inner">
                                    <div className="login-content">
                                        <h4>Wyslij ponownie kod aktywacyjny</h4>
                                        <ResendActivationCodeForm/>
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