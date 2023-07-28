import CategoriesList from "@/components/Forum/Sidebar/CategoriesList";
import React, {Suspense} from "react";
import Thread from "@/components/Forum/Thread";
import Link from "next/link";
import LastOnlineUsersWidget from "@/components/Forum/Sidebar/LastOnlineUsers";
import Pagination from "@/components/Elements/Pagination";
import {Page_Category_LYU_, Page_ThreadOut_, Page_UserOut2Schema_} from "sharkservers-sdk";

interface IProps {
    categories_data: Page_Category_LYU_,
    threads_data: Page_ThreadOut_,
    last_online_users_data: Page_UserOut2Schema_,
}


const ForumMain: React.FC<IProps> = ({categories_data, threads_data, last_online_users_data}: IProps) => {
    return (
        <section className={"about-info-area pt-130 pb-90"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-2 order-lg-1">
                        <div className="forum-tab-contents mb-0 wow fadeInUp">
                            <div className="tab-content" id="nav-tabContent">
                                {threads_data && threads_data.items.map((thread, index) => (
                                    <Thread
                                        key={index}
                                        id={thread.id}
                                        title={thread.title}
                                        is_closed={thread.is_closed}
                                        content={thread.content}
                                        category={thread.category}
                                        // @ts-ignore
                                        author={thread.author}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="row wow fadeInUp">
                            <div className="col-12">
                                <Pagination total={threads_data.total}/>
                            </div>
                        </div>
                        <div className="row wow fadeInUp">
                            <div className="col-12">
                                <LastOnlineUsersWidget last_online_users_data={last_online_users_data}/>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-4 order-1 order-lg-2"}>
                        <div className="page-sidebar">
                            <div className="crate-question-wrapper mb-30">
                                <Link className="create-question-btn" href="/forum/create">Utwórz wątek</Link>
                            </div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <CategoriesList
                                    // @ts-ignore
                                    items={categories_data.items}
                                    // @ts-ignore
                                    size={categories_data.size}
                                    // @ts-ignore
                                    page={categories_data.page}
                                    total={categories_data.total}
                                />
                            </Suspense>
                            <LastOnlineUsersWidget last_online_users_data={last_online_users_data}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForumMain