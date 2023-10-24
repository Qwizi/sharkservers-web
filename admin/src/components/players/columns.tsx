import { ColumnDef } from "@tanstack/react-table"
import { PlayerOut } from "sharkservers-sdk"

export const columns: ColumnDef<PlayerOut>[] = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "username",
        header: "username",
    },
    {
        accessorKey: "steamid3",
        header: "steamid3",
    },
    {
        accessorKey: "steamid32",
        header: "steamid32",
    },
    {
        accessorKey: "steamid64",
        header: "steamid64",
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