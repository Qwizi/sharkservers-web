import CreateThread from "@/components/forum/create-thread";
import SharkApi, { authApi } from "@/lib/api";

export default async function CreateThreadPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const api = await authApi(SharkApi)
    const categories = await api.forum.getCategories(undefined, 100, "id")
    const category = searchParams["category"] ? searchParams["category"] : undefined

    
    return (
        <CreateThread categories={categories} category={category}/>
    )
}