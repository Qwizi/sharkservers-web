'use client';
import React from "react";
import {useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
const EmailTab = () => {
    const {data: session, update} = useSession()
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const Alert = withReactContent(Swal)
    // @ts-ignore
    const onSubmit = async (data) => {
        console.log("TODO: Implement email change")
    }
    return (<>
            <form className="personal-info-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label htmlFor="email">Adres e-mail</label>
                            {errors?.email?.type === "required" &&
                                <span className="text-danger">Pole jest wymagane</span>}
                            {errors?.email?.type === "pattern" &&
                                <span className="text-danger">Niepoprawny adres e-mail</span>}
                            <input type="email" id="email" placeholder="Adres e-mail"
                                   {...register("email", {
                                       required: true,
                                       pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                       value: session?.user.email
                                   })}/>
                        </div>
                    </div>
                </div>
                <div className="personal-info-btn">
                    <button type="submit" id="update-btn" className="fill-btn">Aktualizuj</button>
                </div>
            </form>
        </>);
}

export default EmailTab;