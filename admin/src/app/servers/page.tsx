import { columns } from "@/components/servers/columns";
import { DataTable } from "@/components/data-table";
import { sharkApi } from "@/lib/server-api";

export default async function ServersPage() {
    const api = await sharkApi()
    const data = await api.servers.getServers()
    return (
        <>
        <DataTable columns={columns} data={data.items} />
        </>
    )
}