'use client';
import {Page_PostOut_, Page_ThreadOut_, UserOut2Schema} from "sharkservers-sdk";
import React, {useState} from "react";
import Username from "@/components/Elements/Username";
import Image from "next/image";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Pagination from "@/components/Elements/Pagination";
import Thread from "@/components/Forum/Thread";

interface IProps {
    user_data: UserOut2Schema,
    posts_data: Page_PostOut_
    threads_data: Page_ThreadOut_
}

const UserProfile: React.FC<IProps> = ({...props}) => {
    const [key, setKey] = useState('threads');

    return (<>
        <section className={"creator-details-area pt-0 pb-90"}>
            <div className="creator-cover-img creator-details-cover-img pos-rel wow fadeInUp">
                <img src="/assets/img/profile/cover1.jpg" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-8">
                        <div className="creator-about mb-40 wow fadeInUp">
                            <div className="profile-img pos-rel">
                                <Image src={`http://localhost${props.user_data.avatar}`} alt={"Profile image"}
                                       width={160} height={160}/>
                            </div>
                            <h4 className="artist-name pos-rel">
                                <Username color={props.user_data.display_role?.color}
                                          username={props.user_data.username} id={props.user_data.id}/>
                                <span className="profile-verification verified">
                                        <i className="fas fa-check"></i>
                                    </span>
                            </h4>
                            <div className="artist-id">@{props.user_data.username}</div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-6 col-md-4">
                        <div className="creator-info-bar mb-30 wow fadeInUp">
                            <div className="artist-meta-info creator-details-meta-info">
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">Postów</div>
                                    <div className="artist-created">{props?.posts_data?.total}</div>
                                </div>
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">Tematów</div>
                                    <div className="artist-likes">{props?.threads_data?.total}</div>
                                </div>
                            </div>
                            <div className="creator-details-action">
                                <div className="artist-follow-btn">
                                    <button className="follow-artist"></button>
                                </div>
                                <div className="social__links creator-share">
                                    <i className="flaticon-share"></i>
                                    <ul className="d-none">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                                <div className="profile-link-text">13b9ebda0178...
                                    <button><i className="flaticon-copy"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="creator-info-tab-nav mb-30">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="threads" title="Tematy">
                                    <div className="creator-info-tab-contents mb-30">
                                        <div className="created-items-wrapper">
                                            <div className="row">
                                                <div className="col-12">
                                                    <Pagination total={props?.threads_data?.total} size={5}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                {props?.threads_data?.items?.map((thread) => <Thread id={thread.id}
                                                                                                     title={thread.title}
                                                                                                     is_closed={thread.is_closed}
                                                                                                     content={thread.content}
                                                                                                     category={thread.category}
                                                                                                     author={thread.author}
                                                                                                     key={thread.id}/>)}
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <Pagination total={props?.threads_data?.total} size={5}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Tab>
                                <Tab eventKey="posts" title="Posty">
                                    Tab content for Profile
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default UserProfile