import ActivateAccountForm from "@/components/Auth/ActivateAccountForm";

const ActivateAccountMain = () => {
    return (
        <>
            <section className="login-area pt-100 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                            <div className="login-wrapper pos-rel mb-40 wow fadeInUp">
                                <div className="login-inner">
                                    <div className="login-content">
                                        <h4>Aktywuj konto</h4>
                                        <ActivateAccountForm />
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

export default ActivateAccountMain