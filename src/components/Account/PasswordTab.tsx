'use client';
import React from "react";
import {useForm} from "react-hook-form";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
import {useSession} from "next-auth/react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const PasswordTab = () => {
    const {data: session} = useSession()
    const {register, handleSubmit, formState: {errors}, setError, getValues} = useForm();
    const Alert = withReactContent(Swal)

    // @ts-ignore
    const onSubmit = async (data) => {
        try {
            shark_api.request.config.TOKEN = session?.user.access_token
            const response = await shark_api.users.changeUserPassword({
                current_password: data.old_password,
                new_password: data.password,
                new_password2: data.password_confirmation
            })
            console.log(response)
            await Alert.fire({
                title: "Sukces!",
                icon: "success",
                text: "Hasło zostało zmienione pomyślnie",
                confirmButtonText: "Zamknij"
            })
        } catch (e) {
            // @ts-ignore
            if (e?.status === 400) {
                setError("old_password", {
                    type: "invalid_password",
                    message: "Podane aktualne hasło jest nieprawidłowe"
                })
            }
        }
    }
    return (
        <form className="personal-info-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-12">
                    <div className="single-input-unit">
                        <label htmlFor="old_password">Stare hasło</label>
                        {errors?.old_password?.type === "required" &&
                            <span className="text-danger">Pole jest wymagane</span>}
                        {errors?.old_password?.type === "minLength" &&
                            <span className="text-danger">Pole musi zawierać minimum 8 znaków</span>}
                        {errors?.old_password?.type === "invalid_password" &&
                            <span className="text-danger">Podane aktualne hasło jest nieprawidłowe</span>}
                        <input type="password" id="old_password" placeholder="Hasło"
                               {...register("old_password", {required: true, minLength: 8})}/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-input-unit">
                        <label htmlFor="password">Nowe Hasło</label>
                        {errors?.password?.type === "required" &&
                            <span className="text-danger">Pole jest wymagane</span>}
                        {errors?.password?.type === "minLength" &&
                            <span className="text-danger">Pole musi zawierać minimum 8 znaków</span>}
                        <input type="password" id="password" placeholder="Nowe hasło"
                               {...register("password", {required: true, minLength: 8})}/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-input-unit">
                        <label htmlFor="password_confirmation">Powtórz hasło</label>
                        {errors?.password_confirmation?.type === "required" &&
                            <span className="text-danger">Pole jest wymagane</span>}
                        {errors?.password_confirmation?.type === "minLength" &&
                            <span className="text-danger">Pole musi zawierać minimum 8 znaków</span>}
                        {errors?.password_confirmation?.type === "validate" &&
                            <span className="text-danger">Hasła nie są takie same</span>}
                        <input type="password" id="password_confirmation" placeholder="Powtórz hasło"
                               {...register("password_confirmation", {
                                   required: true, minLength: 8, validate: value => value == getValues("password")
                               })}/>
                    </div>
                </div>
            </div>
            <div className="personal-info-btn">
                <button id="update-btn" className="fill-btn">Aktualizuj</button>
            </div>
        </form>
    )
}

export default PasswordTab