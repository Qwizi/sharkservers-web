"use client"
import { RoleOut } from "sharkservers-sdk"
import { ColumnDef } from "@tanstack/react-table"
import { useRouter } from "next/navigation"

import { Delete, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import DeleteRoleAlert from "./delete-role-alert"

export const columns: ColumnDef<RoleOut>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const role = row.original
            const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
            const router = useRouter()

            return (
                <>
                    <DeleteRoleAlert {...role} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />
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
                                onClick={() => navigator.clipboard.writeText(role.id)}
                            >
                                Kopiuj id
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push(`/admin/users/${role.id}/edit`)}>Edytuj</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>Usuń</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>

            )
        },
    },
]