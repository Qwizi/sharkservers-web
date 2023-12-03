"use client"
import { Scope_SNH } from "sharkservers-sdk"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Scope_SNH>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "app_name",
        header: "App name",
    },
    {
        accessorKey: "value",
        header: "Value",
    },
]