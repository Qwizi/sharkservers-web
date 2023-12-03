"use client"
import { Page_UserOutWithEmail_, UserOut, UserOutWithEmail } from "sharkservers-sdk"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { useState } from "react"
import DeleteUserAlert from "./delete-user-alert"
import { useRouter } from "next/navigation"

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
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original
            const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
            const router = useRouter()

            return (
                <>
                    <DeleteUserAlert {...user} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Akcje</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(user.id)}
                            >
                                Kopiuj id
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push(`/admin/users/${user.id}/edit`)}>Edytuj</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>Usuń</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>

            )
        },
    },
]