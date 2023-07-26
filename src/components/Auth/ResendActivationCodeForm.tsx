'use client';
import {useForm} from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {SharkServersClient as shark_api} from "sharkservers-sdk";

const ResendActivationCodeForm = () => {
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const Alert = withReactContent(Swal)
    const onSubmit = async (data: any) => {
        try {
            const response = await shark_api.auth.resendActivateCode({
                email: data.email
            })
            console.log(response)
            await Alert.fire({
                title: 'Wysłano',
                text: 'Jeżeli podałes poprawny adres e-mail, powinieneś otrzymać wiadomość z kodem aktywacyjnym',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            {errors?.email?.type === "required" &&
                                <span className="text-danger">Pole jest wymagane</span>}
                            {errors?.email?.type === "pattern" &&
                                <span className="text-danger">Niepoprawny adres e-mail</span>}
                            <input type="email" id="email" placeholder="Adres e-mail"
                                   {...register("email", {
                                       required: true,
                                       pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                   })}/>
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