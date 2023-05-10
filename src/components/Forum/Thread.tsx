import React from "react";
import Link from "next/link";
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
}

const Thread: React.FC<IProps> = ({...props}: IProps) => {
    return (
        <div className="tab-pane fade active show" id="tab-nav1" role="tabpanel" aria-labelledby="nav-tab1">
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
                        <h4 className="post-question">
                            <Link href={`/forum/thread/${props.id}`}>{props?.title}</Link>
                        </h4>

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
                </div>
            </div>
        </div>
    )
}

export default Thread