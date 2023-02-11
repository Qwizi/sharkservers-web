import Link from "next/link";
import React from "react";

const Post = () => {
    return (
        <>
            <div className="q-single-answer">
                <div className="author-name-time">
                    <div className="profile-img pos-rel">
                        <Link href="/creator-profile"><img src="assets/img/profile/profile10.jpg" alt="profile-img" /></Link>
                    </div>
                    <div className="name-post-time">
                        <h4 className="artist-name">
                            <Link href="/creator-profile">Kesory Jonathan</Link>
                        </h4>
                        <div className="post-date-time">
                            <div className="post-date">06/20/2021</div>
                            <div className="post-time item-border-before">9:58am</div>
                        </div>
                    </div>
                </div>
                <div className="answer-text">
                    Hi, Daniyel. When we think of entrepreneurs today, they tend to be in a rush
                    to create
                    things. When you were thinking
                    about building and growing your business.
                </div>
                <div className="ans-meta-content">
                    <div className="q-meta-item">
                        <div className="q-meta-icon"><i className="flaticon-heart"></i></div>
                        <div className="q-meta-likes">50</div>
                        <div className="q-meta-type">Likes</div>
                    </div>
                    <div className="q-meta-item">
                        <button>
                            <span className="q-meta-icon"><i className="flaticon-share-1"></i></span>
                            <span className="q-meta-type">Reply</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post