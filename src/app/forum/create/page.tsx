import CreateThreadForm from "@/components/Forum/CreateThread";
import TitleSection from "@/components/Layout/TitleSection";
import apiClient from "@/lib/api";

const fetchCategories = async () =>{
    const categories = await fetch("http://localhost/v1/forum/categories", { next: { revalidate: 10 }})
    return await categories.json()
}

export default async function ForumCreatePage() {
    const categories_data = await apiClient.forum.forumGetCategories()
    return (
        <>
            <div className="upload-area pt-130 pb-90">
                    <div className="container">
                        <CreateThreadForm categories_data={categories_data}/>
                    </div>
             </div>
        </>

    )
}