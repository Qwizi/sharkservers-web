import { DataTable } from "@/components/admin/data-table";
import { columns } from "@/components/admin/scopes/columns";
import { sharkApi } from "@/lib/server-api";

export default async function AdminScopesPage() {
    const api = await sharkApi()
    const scopes = await api.adminScopes.adminGetScopes()
    return (
        <DataTable columns={columns} data={scopes.items} />
    )
}