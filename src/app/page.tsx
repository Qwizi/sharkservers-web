
import {SharkServersClient as shark_api} from "sharkservers-sdk";
import Thread from "@/components/Forum/Thread";
import Category from "@/components/Forum/Sidebar/Category";
import React from "react";
import Link from "next/link";
import LastOnlineUsersWidget from "@/components/Forum/Sidebar/LastOnlineUsers";
import CategoriesList from "@/components/Forum/Sidebar/CategoriesList";
import Pagination from "@/components/Elements/Pagination";
import LastThreads from "@/components/Forum/Sidebar/LastThreads";

export default async function Home({
                                       params, searchParams,
                                   }: {
    params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined };
}) {
    let category_id = searchParams["category_id"] ? Number(searchParams["category_id"]) : 1
    let page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const categories = shark_api.forum.getCategories()
    const threads = shark_api.forum.getThreads(category_id, page, 10)
    const last_threads = shark_api.forum.getThreads( undefined, undefined, 5)
    const last_online_users = shark_api.users.getLastLoggedUsers()
    const [
        categories_data,
        threads_data,
        last_online_users_data,
        last_threads_data
    ] = await Promise.all([categories, threads, last_online_users, last_threads])
    return (<>
        <section className={"about-info-area pt-130 pb-90"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-2 order-lg-1">
                        <div className="forum-tab-contents mb-0 wow fadeInUp">
                            <div className="tab-content" id="nav-tabContent">
                                {threads_data.total > 0 ?  threads_data.items.map((thread, index) => (
                                    <Thread key={index} id={thread.id} title={thread.title} is_closed={thread.is_closed}
                                            content={thread.content} category={thread.category}
                                            author={thread.author}/>)) : <h4>Brak tematów dla tej kategorii</h4>}
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
                            <div className="row">
                                <div className="crate-question-wrapper mb-30">
                                    <Link className="create-question-btn" href="/forum/create">Utwórz wątek</Link>
                                </div>
                            </div>
                            <CategoriesList
                                    // @ts-ignore
                                    items={categories_data.items}
                                    // @ts-ignore
                                    size={categories_data.size}
                                    // @ts-ignore
                                    page={categories_data.page}
                                    total={categories_data.total}
                                />
                            <LastThreads
                                items={last_threads_data.items}
                                size={last_threads_data.size}
                                page={last_threads_data.page}
                                total={last_threads_data.total}
                            />
                            <LastOnlineUsersWidget last_online_users_data={last_online_users_data}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export const revalidate = 0
export const fetchCache = 'force-no-store';