import { columns } from "@/components/roles/columns";
import { DataTable } from "@/components/data-table";
import { sharkApi } from "@/lib/server-api";

export default async function RolesPage({
    searchParams,
}: {
searchParams: { [key: string]: string | string[] | undefined };
}) {
    let page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const api = await sharkApi()
    const data = await api.roles.getRoles(page, 50)
    return (
        <>
        <DataTable columns={columns} data={data.items} />
        </>
    )
}