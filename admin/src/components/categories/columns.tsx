import { ColumnDef } from "@tanstack/react-table"
import { CategoryOut } from "sharkservers-sdk"

export const columns: ColumnDef<CategoryOut>[] = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "name",
        header: "name",
    },
    {
        accessorKey: "description",
        header: "description",
    },
    {
        accessorKey: "type",
        header: "type",
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