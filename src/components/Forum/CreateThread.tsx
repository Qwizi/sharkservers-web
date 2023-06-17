'use client';
import React from "react";
import {useSession} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {AuthPostApi} from "@/lib/fetchApi";
import {toast} from "react-toastify";
import {Page_Category_CHE_} from "@/client";
import apiClient from "@/lib/api";

interface IProps {
    categories_data: Page_Category_CHE_
}

const CreateThreadForm: React.FC<IProps> = ({categories_data}: IProps) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [category, setCategory] = React.useState(categories_data.items[0].id);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const {data: session} = useSession()
    const router = useRouter()

    const clearForm = () => {
        setTitle('')
        setContent('')
        setCategory(categories_data.items[0].id)
        setButtonDisabled(false)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonDisabled(true)
        const res_toast = await toast.loading('Laduje...')
        try {
            /*const res = await AuthPostApi('/v1/forum/threads', JSON.stringify({
                title: title,
                content: content,
                category: category,
            }), session)*/
            apiClient.request.config.TOKEN = session?.user?.access_token
            const newThread = await apiClient.forum.forumCreateThread({
                title: title,
                content: content,
                // @ts-ignore
                category: category,
            })
            clearForm()
            router.push(`/forum/thread/${newThread.id}`)
            toast.update(res_toast, {
                render: "Dodano wątek",
                type: "success",
                isLoading: false,
                autoClose: 4000,
            })
        } catch (error: any) {
            console.log(error)
            toast.update(res_toast, {
                // @ts-ignore
                render:  error.message,
                type: "error",
                isLoading: false,
                autoClose: 5000,
            })
            setButtonDisabled(false)
        }
    }

    return (
        <div className="upload-wrapper mb-10">
            <form className="upload-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row wow fadeInUp">
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label>Tytuł</label>
                                    <input type="text" placeholder="Tytuł" onChange={(e) => setTitle(e.target.value)}
                                           value={title}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label>Kategoria</label>
                                    <div className="common-select-arrow common-select-arrow-60 w-full">
                                        <select className="art-category-select art-category-select2 w-full"
                                                onChange={(e) => setCategory(Number(e.target.value))} value={category}>
                                            {categories_data && categories_data.items.map((category, index) => {
                                                return (
                                                    <option key={index} value={category.id}>{category.name}</option>
                                                )
                                            })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-input-unit">
                                    <label>Treść</label>
                                    <div className="answer-submit">
                                        <textarea name={"answer"} placeholder="Wpisz treść posta"
                                                  onChange={(e) => setContent(e.target.value)}
                                                  value={content}></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="upload-btn wow fadeInUp">
                            <button id="upload-btn" className="fill-btn" disabled={buttonDisabled}>Napisz temat</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CreateThreadForm;