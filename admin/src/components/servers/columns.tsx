import { ColumnDef } from "@tanstack/react-table"
import { ServerOut } from "sharkservers-sdk"

export const columns: ColumnDef<ServerOut>[] = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "name",
        header: "name",
    },
    {
        accessorKey: "ip",
        header: "ip",
    },
    {
        accessorKey: "port",
        header: "port",
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