'use client';
import React from "react";
import {useSession} from "next-auth/react";

interface IProps {
     categories_data: {
        items: [
            {
                id: number;
                name: string;
                description: string;
                type: string;
                created_at: string;
                updated_at: string;
            }
        ],
        total: number;
        page: number;
        size: number;
    },
}

const CreateThreadForm: React.FC<IProps> = ({categories_data}: IProps) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [category, setCategory] = React.useState(categories_data.items[0].id);
    const {data: session} = useSession()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const access_token = session?.user?.token.access_token
        const res = await fetch('http://localhost/v1/forum/threads', {
            body: JSON.stringify({
                title: title,
                content: content,
                category: category,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,
            },
            method: 'POST'
        })
        const result = await res.json()
        console.log(result)
    }

    return (
        <div className="upload-wrapper mb-10">
            <form action="#" className="upload-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row wow fadeInUp">
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label>Tytuł</label>
                                    <input type="text" placeholder="Tytuł" onChange={(e) => setTitle(e.target.value)} value={title}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label>Kategoria</label>
                                    <div className="common-select-arrow common-select-arrow-60 w-full">
                                        <select className="art-category-select art-category-select2 w-full" onChange={(e) => setCategory(e.target.value)} value={category}>
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
                                    <textarea placeholder="Wpisz treść posta" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="upload-btn wow fadeInUp">
                            <button id="upload-btn" className="fill-btn">Napisz temat</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CreateThreadForm;