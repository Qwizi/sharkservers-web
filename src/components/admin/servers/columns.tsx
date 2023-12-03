"use client"
import { Page_UserOutWithEmail_, ServerOut, UserOut, UserOutWithEmail } from "sharkservers-sdk"
import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"
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

import { useRouter } from "next/navigation"
import DeleteServerAlert from "./delete-server-alert"

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
    {
        id: "actions",
        cell: ({ row }) => {
            const server = row.original
            const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
            const router = useRouter()

            return (
                <>
                    <DeleteServerAlert {...server} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />
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
                                onClick={() => navigator.clipboard.writeText(server.id)}
                            >
                                Kopiuj id
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push(`/admin/servers/${server.id}/edit`)}>Edytuj</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>Usuń</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>

            )
        },
    },
]