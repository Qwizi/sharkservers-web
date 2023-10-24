import { ColumnDef } from "@tanstack/react-table"
import { UserOutWithEmail } from "sharkservers-sdk"

export const columns: ColumnDef<UserOutWithEmail>[] = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "username",
        header: "username",
    },
    {
        accessorKey: "email",
        header: "email",
    },
    {
        accessorKey: "is_activated",
        header: "is_activated",
    },
    {
        accessorKey: "is_superuser",
        header: "is_superuser",
    },
    {
        accessorKey: "created_at",
        header: "created_at",
    },
    {
        accessorKey: "updated_at",
        header: "updated_at",
    },
]