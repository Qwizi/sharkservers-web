import TitleSection from "@/components/Layout/TitleSection";
import ForumMain from "@/components/Forum/ForumMain";

const fetchCategories = async () =>{
    const categories = await fetch("http://localhost/v1/forum/categories", { next: { revalidate: 10 }})
    return await categories.json()
}

const fetchThreads = async (category_id: number) =>{
    const threads = await fetch("http://localhost/v1/forum/threads?category_id=" + category_id, { next: { revalidate: 10 }})
    return await threads.json()
}


export default async function ForumPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}){
    const categories_data = await fetchCategories()
    let category_id = searchParams["category_id"] ? Number(searchParams["category_id"]) : 0
    const threads_data = await fetchThreads(category_id)
    console.log(threads_data)
    return (
        <>
            <TitleSection title={"Forum"} />
            <ForumMain categories_data={categories_data} threads_data={threads_data}/>
        </>
    )
}