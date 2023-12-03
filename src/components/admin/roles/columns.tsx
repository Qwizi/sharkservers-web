"use client"
import { RoleOut } from "sharkservers-sdk"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<RoleOut>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
]