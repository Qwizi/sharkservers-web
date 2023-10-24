import { DataTable } from "@/components/data-table";
import Pagination from "@/components/pagination";
import { columns } from "@/components/users/columns";
import { sharkApi } from "@/lib/server-api";

export default async function UsersPage({
    searchParams,
}: {
searchParams: { [key: string]: string | string[] | undefined };
}) {
    const api = await sharkApi()
    let page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const data = await api.adminUsers.adminGetUsers(page, 10)
    return (
        <>
        <DataTable columns={columns} data={data.items} />
        <Pagination total={data.total} size={data.size} />
        </>
    )
}