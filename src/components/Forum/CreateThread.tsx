'use client';
import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {Page_Category_CHE_} from "@/client";
import {useForm} from "react-hook-form";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
import {useRouter} from "next/navigation";

const CreateThreadForm: React.FC<Page_Category_CHE_> = ({...props}: Page_Category_CHE_) => {
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const [isValid, setIsValid] = useState(false)
    const [threadId, setThreadId] = useState(0)
    const {data: session} = useSession()

    useEffect(() => {
        if (isValid) {
            // @ts-ignore
            router.push("/thread/" + threadId)
        }
    }, [isValid])

    // @ts-ignore
    const onSubmit = async (data) => {
        try {
            shark_api.request.config.TOKEN = session?.user.access_token
            const response = await shark_api.forum.createThread({
                title: data.title,
                content: data.content,
                category: 1,
            })
            setThreadId(response?.id)
            setIsValid(true)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="upload-wrapper mb-10">
            <form className="upload-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row wow fadeInUp">
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label>Tytuł</label>
                                    {errors?.title?.type === "required" &&
                                        <span className="text-danger">Pole jest wymagane</span>}
                                    <input type="text" id="title" placeholder="Tytul"
                                           {...register("title", {required: true, minLength: 3, maxLength: 32})}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row wow fadeInUp">
                                <div className="col-md-6">
                                    <div className="single-input-unit">
                                        <label>Treść</label>
                                        {errors?.content?.type === "required" &&
                                            <span className="text-danger">Pole jest wymagane</span>}
                                        <textarea id="content" placeholder="Treść"
                                               {...register("content", {required: true})}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="upload-btn wow fadeInUp">
                            <button id="upload-btn" className="fill-btn" type={"submit"}>Napisz temat</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CreateThreadForm;