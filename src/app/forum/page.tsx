import TitleSection from "@/components/Layout/TitleSection";
import ForumMain from "@/components/Forum/ForumMain";

const fetchCategories = async () =>{
    const categories = await fetch("http://localhost/v1/forum/categories", { next: { revalidate: 0 }})
    return await categories.json()
}

const fetchThreads = async (category_id: number, page: number) =>{
    const threads = await fetch(`http://localhost/v1/forum/threads?category_id=${category_id}&page=${page}&size=10`, { next: { revalidate: 0 }})
    return await threads.json()
}

const fetchLastOnlineUsers = async () =>{
    const last_online_users = await fetch("http://localhost/v1/users/online", { next: { revalidate: 15 }})
    return await last_online_users.json()
}


export default async function ForumPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}){
    const categories_data = await fetchCategories()
    let category_id = searchParams["category_id"] ? Number(searchParams["category_id"]) : 1
    let page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const threads_data = await fetchThreads(category_id, page)
    const last_online_users_data = await fetchLastOnlineUsers()
    return (
        <>
            <TitleSection title={"Forum"} />
            <ForumMain categories_data={categories_data} threads_data={threads_data} last_online_users_data={last_online_users_data}/>
        </>
    )
}