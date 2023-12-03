import { DataTable } from "@/components/admin/data-table";
import { columns } from "@/components/admin/roles/columns";
import { sharkApi } from "@/lib/server-api";

export default async function AdminRolesPage() {
    const api = await sharkApi()
    const roles = await api.adminRoles.adminGetRoles()
    return (
        <DataTable columns={columns} data={roles.items} />
    )
}