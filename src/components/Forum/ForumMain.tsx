import CategoriesList from "@/components/Forum/Sidebar/CategoriesList";
import React, {Suspense} from "react";
import Thread from "@/components/Forum/Thread";
import Link from "next/link";
import LastOnlineUsersWidget from "@/components/Forum/Sidebar/LastOnlineUsers";
import Pagination from "@/components/Elements/Pagination";

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
    threads_data: {
        items: [
            {
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
        ],
        total: number;
        page: number;
        size: number;
    },
    last_online_users_data: {
        items: [
            {
                id: number;
                username: string;
                avatar: string;
                display_role: {
                    id: number;
                    name: string;
                    color: string;
                    is_staff: boolean;

                }
            },
        ],
        total: number;
        page: number;
        size: number;
    },
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
                                        created_at={thread.created_at}
                                        updated_at={thread.updated_at}
                                        category={thread.category}
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
                    </div>
                    <div className={"col-lg-4 order-1 order-lg-2"}>
                        <div className="page-sidebar">
                            <div className="crate-question-wrapper mb-30">
                                <Link className="create-question-btn" href="/forum/create">Utwórz wątek</Link>
                            </div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <CategoriesList
                                    items={categories_data.items}
                                    size={categories_data.size}
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