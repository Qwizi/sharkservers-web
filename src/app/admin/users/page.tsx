import { DataTable } from "@/components/admin/data-table";
import { columns } from "@/components/admin/users/columns";
import { sharkApi } from "@/lib/server-api";

export default async function AdminUsersPage() {
    const api = await sharkApi()
    const users = await api.adminUsers.adminGetUsers()
    return (
        <DataTable columns={columns} data={users.items} />
    )
}