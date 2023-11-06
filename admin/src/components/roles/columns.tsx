'use client'
import { ColumnDef } from "@tanstack/react-table"
import { Page_RoleOut_, RoleOut } from "sharkservers-sdk"
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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState } from "react"
import { deleteRoleAction } from "@/actions"

export const columns: ColumnDef<RoleOut>[] = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "name",
        header: "name",
    },
    {
        accessorKey: "color",
        header: "color",
    },
    {
        accessorKey: "is_staff",
        header: "is_staff",
    },
    {
        accessorKey: "created_at",
        header: "created_at",
    },
    {
        accessorKey: "updated_at",
        header: "updated_at",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const role = row.original
            const [openAlert, setOpenAlert] = useState(false)

            const onClickDelete = async (roleId: number) => {
                const response = await deleteRoleAction({id: roleId})
                console.log(response)
            }
            return (
                <>
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
                                Kopiuj id roli
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setOpenAlert(!openAlert)}>Usuń</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Czy napewno chcesz usunać role {role.name} o id {role.id}?</AlertDialogTitle>
                                <AlertDialogDescription>
                                o działanie nie może być cofnięte. Spowoduje to trwałe usunięcie zasobu
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Anuluj</AlertDialogCancel>
                                <AlertDialogAction onClick={() => onClickDelete(role.id)}>Usuń</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </>

            )
        },
    },

]