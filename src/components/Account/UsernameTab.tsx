'use client';
import {useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import React from "react";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const UsernameTab = () => {
    const {data: session, update} = useSession()
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const Alert = withReactContent(Swal)

    // @ts-ignore
    const onSubmit = async (data) => {
        try {
            shark_api.request.config.TOKEN = session?.access_token.token
            const response = await shark_api.users.changeUserUsername({
                username: data.username
            })
            await update({
                ...session,
                user: {
                    ...session?.user,
                    username: data.username
                }
            })
            await Alert.fire({
                title: "Sukces!",
                icon: "success",
                text: "Nazwa użytkownika została zmieniona pomyślnie",
                confirmButtonText: "Zamknij"
            })
        } catch (e) {
            // @ts-ignore
            if (e?.status === 400) {
                setError("username", {
                    type: "invalid_username",
                    message: "Nazwa użytkownika jest już zajęta"
                })
            }
            console.log(e)
        }

    }

    return (
        <form className="personal-info-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-12">
                    <div className="single-input-unit">
                        <label htmlFor="username">Nazwa użytkownika</label>
                        {errors?.username?.type === "required" &&
                            <span className="text-danger">Pole jest wymagane</span>}
                        {errors?.username?.type === "minLength" &&
                            <span className="text-danger">Pole musi zawierać minimum 3 znaki</span>}
                        {errors?.username?.type === "maxLength" &&
                            <span className="text-danger">Pole musi zawierać maksimum 32 znaki</span>}
                        {errors?.username?.type === "pattern" &&
                                <span className="text-danger">Pole może zawierać tylko litery, cyfry, znaki _ i -</span>}
                        {errors?.username?.type === "validate" &&
                            <span className="text-danger">Nazwa użytkownika musi być inna niż poprzednia</span>}
                        {errors?.username?.type === "invalid_username" &&
                            <span className="text-danger">Nazwa użytkownika jest już zajęta</span>}
                        <input type="text" id="username" placeholder="Nazwa użytkownika"
                               {...register("username", {
                                   required: true,
                                   minLength: 3,
                                   maxLength: 32,
                                   pattern: /^[a-zA-Z0-9_-]+$/,
                                   value: session?.user.username,
                                   validate: value => value !== session?.user.username
                               })}/>
                    </div>
                </div>
            </div>
            <div className="personal-info-btn">
                <button type="submit" id="update-btn" className="fill-btn">Aktualizuj</button>
            </div>
        </form>
    )
}

export default UsernameTab