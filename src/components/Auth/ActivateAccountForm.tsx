'use client';
import {createRef, useEffect, useRef, useState} from "react";
import {activate_account} from "@/lib/fetchApi";
import {redirect} from "next/navigation";

const ActivateAccountForm = () => {
    const codeDefault = [
        "", // code 1
        "", // code 2
        "", // code 3
        "", // code 4
        "" // code 5
    ]
    const [code, setCode] = useState(codeDefault)

    const codeRefs: any = []
    // @ts-ignore
    const refs_ = [...Array(5)].map((_, i) => {
        codeRefs[i]=createRef()
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

        const res = await activate_account(codeToSend)
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const data = await res.json()
        if (!data) {
            setError("Kod aktywacyjny jest niepoprawny")
        } else {
            redirect("/auth/activate-account/success")
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
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className={error ? "alert alert-danger alert-dismissible fade show": "alert alert-danger hidden"}>
                        {error}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                {[...Array(5)].map((e, i) =>
                    <div className="col-md-2 col-sm-2"  key={i}>
                        <div className="single-input-unit">
                            <input
                                ref={codeRefs[i]}
                                id={`activate_code_${i + 1}`}
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