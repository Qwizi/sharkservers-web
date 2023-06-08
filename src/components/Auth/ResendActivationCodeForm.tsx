'use client';
import AlertMessage from "@/components/Elements/AlertMessage";
import {useState} from "react";
import useErrorParams from "@/hooks/useErrorParams";
import {resend_activation_code} from "@/lib/fetchApi";

const ResendActivationCodeForm = () => {
    const [email, setEmail] = useState("")
    // @ts-ignore
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("Wysylam ponownie kod aktywacyjny")
        const response = await resend_activation_code(email)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json()
        console.log("data", data)
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