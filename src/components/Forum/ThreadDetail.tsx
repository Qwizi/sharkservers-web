'use client';
import React from "react";
import Link from "next/link";
import Post from "@/components/Forum/Post";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Username from "@/components/Elements/Username";

interface IProps {
    id: number;
    title: string;
    is_closed: boolean;
    content: string;
    created_at: string;
    updated_at: string;
    category: {
        id: number;
        name: string;
    }
    author: {
        id: number;
        username: string;
        avatar: string;
        display_role: {
            id: number;
            name: string;
            color: string;
            is_staff: boolean;
        }
    }
    posts_data: {
        items: [
            {
                id: number;
                content: string;
                created_at: string;
                updated_at: string;
                author: {
                    id: number;
                    username: string;
                    avatar: string;
                    display_role: {
                        id: number;
                        name: string;
                        color: string;
                        is_staff: boolean;
                    }
                }
            },
        ],
        total: number;
        page: number;
        size: number;
    }
}

const ThreadDetail: React.FC<IProps> = ({...props}: IProps) => {
    const [content, setContent] = React.useState<string>("");
    const {data: session} = useSession();
    // @ts-ignore
    const access_token = session?.user?.token?.access_token
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('http://localhost/v1/forum/posts', {
            body: JSON.stringify({
                content: content,
                thread_id: props.id,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,
            },
            method: 'POST'
        })
        if (res.status === 401) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Invalid credentials')
        }
        if (!res.ok) {
            throw new Error('Failed fetch data')
        }
        const result = await res.json()
        console.log(result)
        router.refresh()
        setContent("")
    }

    return (
        <div className="forum-post-wrapper mb-30">
            <div className="q-single-wrapper comments-show mb-30">
                <div className="q-single-content">
                    <div className="author-name-time">
                        <div className="profile-img pos-rel">
                            <img src="/assets/img/profile/profile4.jpg" alt="profile-img"/>
                        </div>
                        <div className="name-post-time">
                            <h4 className="artist-name">
                                <Username color={props.author.display_role.color} username={props.author.username}/>
                            </h4>
                            <div className="post-date-time">
                                <div className="post-date">{props?.created_at}</div>
                                <div className="post-time item-border-before">9:58am</div>
                            </div>
                        </div>
                    </div>
                    <h4 className="post-question">{props?.title}</h4>
                    <p>{props?.content}</p>
                </div>
                <div className="q-meta-content">
                    <div className="q-meta-item">
                        <div className="q-meta-icon"><i className="flaticon-heart"></i></div>
                        <div className="q-meta-likes">875</div>
                        <div className="q-meta-type">Likes</div>
                    </div>
                    <div className="q-meta-item">
                        <a href="#">
                            <div className="q-meta-icon"><i className="flaticon-chatting"></i></div>
                            <div className="q-meta-comments">859</div>
                            <div className="q-meta-type">Comments</div>
                        </a>
                    </div>
                    <div className="q-meta-item">
                        <div className="q-meta-icon"><i className="flaticon-share-1"></i></div>
                        <div className="q-meta-shares">54</div>
                        <div className="q-meta-type">Shares</div>
                    </div>
                    <div className="q-meta-item">
                        <div className="q-meta-views">+55</div>
                        <div className="q-meta-type">Views</div>
                    </div>
                </div>
                <div className="q-answers mb-30 mt-30">
                    {props.posts_data && props?.posts_data?.items?.map((post, index) => (
                        <Post id={post.id} content={post.content} author={post.author} created_at={post.created_at}
                              updated_at={post.updated_at} key={index}/>
                    ))}
                </div>
                <div className="q-answers-btn">
                    <form action="#" className="q-write-answer mb-30" onSubmit={handleSubmit}>
                        <div className="profile-img pos-rel">
                            <Link href="/creator-profile"><img src="/assets/img/profile/profile4.jpg"
                                                               alt="profile-img"/></Link>
                        </div>
                        <div className="answer-submit">
                            <textarea name="answer" placeholder="Your answer"
                                      onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                            <div className="answer-submit-btn">
                                <button type={"submit"} className="fill-btn">Answer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ThreadDetail