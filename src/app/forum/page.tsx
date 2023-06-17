import TitleSection from "@/components/Layout/TitleSection";
import ForumMain from "@/components/Forum/ForumMain";
import ServerListSection from "@/components/Forum/ServerListSection";
import ChatSection from "@/components/Forum/ChatSection";
import {get_servers_status} from "@/lib/fetchApi";
import apiClient from "@/lib/api";

const fetchCategories = async () => {
    const categories = await fetch("http://localhost/v1/forum/categories", {next: {revalidate: 0}})
    return await categories.json()
}

const fetchThreads = async (category_id: number, page: number) => {
    const threads = await fetch(`http://localhost/v1/forum/threads?category_id=${category_id}&page=${page}&size=10`, {cache: 'no-store'})
    return await threads.json()
}

const fetchLastOnlineUsers = async () => {
    const last_online_users = await fetch("http://localhost/v1/users/online", {next: {revalidate: 15}})
    return await last_online_users.json()
}

const fetchChatMessages = async () => {
    const chat_messages = await fetch("http://localhost/v1/chat?size=5", {cache: "no-store"})
    return await chat_messages.json()
}

const fetchServerStatus = async () => {
    const server_status = await get_servers_status()
    return await server_status.json()
}
export const revalidate = 0
export default async function ForumPage({
                                            params,
                                            searchParams,
                                        }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    let category_id = searchParams["category_id"] ? Number(searchParams["category_id"]) : 1
    let page = searchParams["page"] ? Number(searchParams["page"]) : 1
    let [categories_data, threads_data, last_online_users_data, servers_status] = await Promise.all([
        apiClient.forum.forumGetCategories(),
        apiClient.forum.forumGetThreads(category_id, page, 10),
        apiClient.users.usersGetLastLoggedUsers(),
        fetchServerStatus()
    ])

    return (
        <>
            <ServerListSection servers={servers_status}/>
            <ForumMain categories_data={categories_data} threads_data={threads_data}
                       last_online_users_data={last_online_users_data}/>
        </>
    )
}