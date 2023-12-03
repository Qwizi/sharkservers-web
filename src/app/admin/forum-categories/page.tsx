import { DataTable } from "@/components/admin/data-table";
import { columns } from "@/components/admin/forum-categories/columns";
import { sharkApi } from "@/lib/server-api";

export default async function AdminForumCategoriesPage() {
    const api = await sharkApi()
    const categories = await api.forum.getCategories()
    return (
        <DataTable columns={columns} data={categories.items} />
    )
}