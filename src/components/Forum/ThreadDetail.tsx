'use client';
import React from "react";
import Link from "next/link";
import Post from "@/components/Forum/Post";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Username from "@/components/Elements/Username";
import {Thread_OIZ} from "sharkservers-sdk";


const ThreadDetail: React.FC<Thread_OIZ> = ({...props}: Thread_OIZ) => {
    const [content, setContent] = React.useState<string>("");
    const {data: session} = useSession();
    // @ts-ignore
    const access_token = session?.user?.access_token
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
                                <Username color="#000"
                                          username="Qwizi" id={1}/>
                            </h4>
                            <div className="post-date-time">
                                <div className="post-date">123</div>
                                <div className="post-time item-border-before">9:58am</div>
                            </div>
                        </div>
                    </div>
                    <h4 className="post-question"></h4>
                    <p></p>
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
                            <div className="q-meta-comments"></div>
                            <div className="q-meta-type">Postów</div>
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