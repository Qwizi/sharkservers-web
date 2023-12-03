import { DataTable } from "@/components/admin/data-table";
import { columns } from "@/components/admin/servers/columns";
import { sharkApi } from "@/lib/server-api";

export default async function AdminServersPage() {
    const api = await sharkApi()
    const servers = await api.servers.getServers()
    return (
        <DataTable columns={columns} data={servers.items} />
    )
}