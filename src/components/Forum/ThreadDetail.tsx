import Link from "next/link";
import React from "react";
import Post from "./Post";
import Thread from "./Thread";

const ThreadDetail = () => {
    return (
        <section className="about-info-area pt-130 pb-90" >
            <div className="container">
                <div className="row">
                    <div className="q-single-wrapper mb-30">
                        <div className="q-single-content">
                            <div className="author-name-time">
                                <div className="profile-img pos-rel">
                                    <Link href="/creator-profile"><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></Link>
                                </div>
                                <div className="name-post-time">
                                    <h4 className="artist-name">
                                        <Link href="/creator-profile">John Schreffler</Link>
                                    </h4>
                                    <div className="post-date-time">
                                        <div className="post-date">06/20/2021</div>
                                        <div className="post-time item-border-before">9:58am</div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="post-question">Change may hurt, but after the wounds have been licked
                            </h4>
                            <p>Entrepreneurship is more all-in compared to a corporate setting. Corporate
                                culture tends
                                to make people objective, sort
                                of neutral parts of the machine in a lot of places. That’s pretty much the
                                opposite of
                                what is needed in a startup,</p>
                            <div className="tags-list post-inner-tags">
                                <a href="#" className="tag">#nft</a>
                                <a href="#" className="tag">#online</a>
                                <a href="#" className="tag">#trend</a>
                                <a href="#" className="tag">#bitcoins</a>
                                <a href="#" className="tag">#Transcation</a>
                            </div>
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
                                <div className="q-meta-viewed-member">
                                    <div className="profile-img pos-rel">
                                        <Link href="/creator-profile"><img src="assets/img/profile/profile1.jpg" alt="profile-img" /></Link>
                                    </div>
                                    <div className="profile-img pos-rel">
                                        <Link href="/creator-profile"><img src="assets/img/profile/profile2.jpg" alt="profile-img" /></Link>
                                    </div>
                                    <div className="profile-img pos-rel">
                                        <Link href="/creator-profile"><img src="assets/img/profile/profile3.jpg" alt="profile-img" /></Link>
                                    </div>
                                    <div className="profile-img pos-rel">
                                        <Link href="/creator-profile"><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></Link>
                                    </div>
                                    <div className="profile-img pos-rel">
                                        <Link href="/creator-profile"><img src="assets/img/profile/profile5.jpg" alt="profile-img" /></Link>
                                    </div>
                                </div>
                                <div className="q-meta-views">+55</div>
                                <div className="q-meta-type">Views</div>
                            </div>
                        </div>
                        
                        <div className="q-answers mb-30">
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <form action="#" className="q-write-answer mb-30">
                            <div className="profile-img pos-rel">
                                <Link href="/creator-profile"><img src="assets/img/profile/profile4.jpg" alt="profile-img" /></Link>
                            </div>
                            <div className="answer-submit">
                                <textarea name="answer" placeholder="Your answer"></textarea>
                                <div className="answer-submit-btn">
                                    <button className="fill-btn">Answer</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreadDetail