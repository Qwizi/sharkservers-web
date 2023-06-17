'use client';
import {createRef, useEffect, useRef, useState} from "react";
import {activate_account} from "@/lib/fetchApi";
import {redirect, useRouter} from "next/navigation";
import AlertMessage from "@/components/Elements/AlertMessage";
import apiClient from "@/lib/api";
import {toast} from "react-toastify";

const ActivateAccountForm = () => {
    const codeDefault = [
        "", // code 1
        "", // code 2
        "", // code 3
        "", // code 4
        "" // code 5
    ]
    const [code, setCode] = useState(codeDefault)
    const router = useRouter()
    const codeRefs: any = []
    // @ts-ignore
    const refs_ = [...Array(5)].map((_, i) => {
        codeRefs[i] = createRef()
    })

    const [error, setError] = useState(null)

    useEffect(() => {
        codeRefs[0].current.focus()
    }, [])

    const clearForm = () => {
        setCode(codeDefault)
    }

    // @ts-ignore
    const onSubmit = async (e) => {
        e.preventDefault()
        let codeToSend = ""
        code.forEach((item) => {
            codeToSend += item
        })
        console.log(codeToSend)
        const notification = await toast.loading('Laduje...')
        try {
            const activateUserRes = await apiClient.auth.authActivateUser({
                code: codeToSend
            })
            toast.update(notification, {
                render: "Pomyślnie aktywowano konto",
                type: "success",
                isLoading: false,
                autoClose: 4000,
            })
        } catch (error: any) {
            console.log(error)
            toast.update(notification, {
                // @ts-ignore
                render: error.message === "Bad Request" ? "Nie poprawny kod" : error.message,
                type: "error",
                isLoading: false,
                autoClose: 4000,
            })
        }

        clearForm()
    }

    // @ts-ignore
    const onChangeInput = (index: number, value) => {
        let code_copy = [...code]
        code_copy[index] = value
        setCode(code_copy)

        if (index >= 4) return

        console.log(codeRefs[index])
        codeRefs[index + 1].current.focus()
        // @ts-ignore
    }

    return (
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-md-12">
                    {error && (<AlertMessage message={error} show={true} type={"danger"}/>)}
                </div>
                {[...Array(5)].map((e, i) =>
                    <div className="col-md-2 col-sm-3" key={i}>
                        <div className="single-input-unit">
                            <input
                                ref={codeRefs[i]}
                                id={`activate_code_${i + 1}`}
                                className={"text-center"}
                                value={code[i]}
                                onChange={(e) => onChangeInput(i, e.target.value)}
                                maxLength={1}
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="login-btn">
                <button className="fill-btn" type="submit">Aktywuj konto</button>
            </div>
        </form>
    )
}

export default ActivateAccountForm