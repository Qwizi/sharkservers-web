'use client';
import AlertMessage from "@/components/Elements/AlertMessage";
import {useState} from "react";
import useErrorParams from "@/hooks/useErrorParams";
import {resend_activation_code} from "@/lib/fetchApi";
import {toast} from "react-toastify";
import apiClient from "@/lib/api";

const ResendActivationCodeForm = () => {
    const [email, setEmail] = useState("")
    // @ts-ignore
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("Wysylam ponownie kod aktywacyjny")
        const notification = await toast.loading('Laduje...')
        try {
            const resendActivationCodeRes = await apiClient.auth.authResendActivateCode({
                email: email
            })
            toast.update(notification, {
                render: "Pomyślnie wysłano kod aktywacyjny, jezeli wprowadziles poprawny email",
                type: "success",
                isLoading: false,
                autoClose: 4000,
            })
        } catch (error: any) {
            console.log(error)
            toast.update(notification, {
                // @ts-ignore
                render: error.message,
                type: "error",
                isLoading: false,
                autoClose: 4000,
            })
        }
    }

    return (
        <>
            <form className="login-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row justify-content-center align-items-center text-center">
                     <div className="col-md-12">
                        <div className="single-input-unit">
                            <input type={"email"} placeholder={"user@website.com"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className="login-btn">
                    <button className="fill-btn" type="submit">Wyslij</button>
                </div>
            </form>

        </>
    )
}
export default ResendActivationCodeForm