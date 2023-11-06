import { columns } from "@/components/roles/columns";
import { DataTable } from "@/components/data-table";
import { sharkApi } from "@/lib/server-api";
import Pagination from "@/components/pagination";

export default async function RolesPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    let page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const api = await sharkApi()
    const data = await api.adminRoles.adminGetRoles(page, 10)
    const scopes = await api.adminScopes.adminGetScopes()
    return (
        <>
            <DataTable columns={columns} data={data.items} 
            scopes={scopes}/>
            <Pagination total={data.total} size={10} />
        </>
    )
}