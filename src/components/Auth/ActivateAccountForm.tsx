'use client';
import {useForm} from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {SharkServersClient as shark_api} from "sharkservers-sdk";

const ActivateAccountForm = () => {
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const Alert = withReactContent(Swal)
    const onSubmit = async (data: any) => {
        try {
            const response = await shark_api.auth.activateUser({
                code: data.activation_code
            })
            await Alert.fire({
                icon: 'success',
                title: 'Konto zostało aktywowane',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (e) {
            await Alert.fire({
                icon: 'error',
                title: 'Code is invalid or expired',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-md-12">
                    <div className="single-input-unit">
                        {errors?.activation_code?.type === "required" &&
                            <span className="text-danger">Pole jest wymagane</span>}
                        {errors?.activation_code?.type === "minLength" || errors?.activation_code?.type === "maxLength" &&
                            <span className="text-danger">Pole musi zawierać 5 znaków</span>}
                        <input type="text" id="activation_code" placeholder="Kod aktywacyjny"
                               {...register("activation_code", {required: true, minLength: 5, maxLength: 5})}/>
                    </div>
                </div>
            </div>

            <div className="login-btn">
                <button className="fill-btn" type="submit">Aktywuj konto</button>
            </div>
        </form>
    )
}

export default ActivateAccountForm