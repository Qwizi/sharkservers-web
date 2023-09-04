import CreateThread from "@/components/forum/create-thread";
import SharkApi from "@/lib/api";

export default async function CreateThreadPage() {
    const categories = await SharkApi.forum.getCategories()
    return (
        <CreateThread categories={categories} />
    )
}