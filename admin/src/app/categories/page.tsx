import { columns } from "@/components/categories/columns";
import { DataTable } from "@/components/data-table";
import { sharkApi } from "@/lib/server-api";

export default async function CategoriesPage() {
    const api = await sharkApi()
    const data = await api.forum.getCategories()
    return (
        <>
        <DataTable columns={columns} data={data.items} />
        </>
    )
}