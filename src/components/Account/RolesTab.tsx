'use client';
import {useSession} from "next-auth/react";
import {Controller, useForm} from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import React from "react";

const RolesTab = () => {
    const {data: session, update} = useSession()
    const {register, handleSubmit, formState: {errors}, control} = useForm();
    const Alert = withReactContent(Swal)

    const user_roles_ids = session?.user.roles.map((role) => role.id)

    // @ts-ignore
    const onSubmit = async (data) => {
        console.log(data)
    }
    // @ts-ignore
    return (<form className="personal-info-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-12">
                <div className="single-input-unit">
                    <label htmlFor="username">Wyświetlana rola</label>
                    {errors?.display_role?.type === "required" &&
                        <span className="text-danger">Pole jest wymagane</span>}
                    {errors?.display_role?.type === "validate" &&
                        <span className="text-danger">Niepoprawna rola</span>}
                    <div className="common-select-arrow common-select-arrow-60 w-full">

                    </div>
                </div>
            </div>
        </div>
        <div className="personal-info-btn">
            <button type="submit" id="update-btn" className="fill-btn">Aktualizuj</button>
        </div>
    </form>)
}

export default RolesTab;