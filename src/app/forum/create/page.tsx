import CreateThreadForm from "@/components/Forum/CreateThread";
import TitleSection from "@/components/Layout/TitleSection";

const fetchCategories = async () =>{
    const categories = await fetch("http://localhost/v1/forum/categories", { next: { revalidate: 10 }})
    return await categories.json()
}

export default async function ForumCreatePage() {
    const categories = await fetchCategories()
    return (
        <>
            <TitleSection title={"Utworz wątek"} />
            <div className="upload-area pt-130 pb-90">
                    <div className="container">
                        <CreateThreadForm categories_data={categories}/>
                    </div>
             </div>
        </>

    )
}