"use client"
import { Page_UserOutWithEmail_, UserOut, UserOutWithEmail } from "sharkservers-sdk"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<UserOutWithEmail>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "is_superuser",
        header: "Superuser",
    },
    {
        accessorKey: "is_activated",
        header: "Activated",
    },
]