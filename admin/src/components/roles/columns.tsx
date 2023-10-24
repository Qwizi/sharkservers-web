import { ColumnDef } from "@tanstack/react-table"
import { Page_RoleOut_, RoleOut } from "sharkservers-sdk"

export const columns: ColumnDef<RoleOut>[] = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "name",
        header: "name",
    },
    {
        accessorKey: "color",
        header: "color",
    },
    {
        accessorKey: "is_staff",
        header: "is_staff",
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