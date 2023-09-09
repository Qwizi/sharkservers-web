import CreateThread from "@/components/forum/create-thread";
import SharkApi, { authApi } from "@/lib/api";

export default async function CreateThreadPage() {
    const api = await authApi(SharkApi)
    const categories = await api.forum.getCategories()
    return (
        <CreateThread categories={categories} />
    )
}