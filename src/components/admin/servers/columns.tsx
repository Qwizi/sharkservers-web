"use client"
import { Page_UserOutWithEmail_, ServerOut, UserOut, UserOutWithEmail } from "sharkservers-sdk"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<ServerOut>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "ip",
        header: "Ip",
    },
    {
        accessorKey: "port",
        header: "Port",
    },
]