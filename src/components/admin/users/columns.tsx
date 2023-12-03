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


import { useState } from "react"
import { adminDeleteUserAction } from "@/actions"
import { toast } from "@/components/ui/use-toast"
import { revalidatePath } from "next/cache"
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

            async function onDeleteButtonClick() {
                const response = await adminDeleteUserAction({ id: user.id })
                if (response.serverError) {
                    toast({
                        variant: "destructive",
                        title: "Oh nie. Wystapil bład",
                        description: response.serverError
                    })
                } else {
                    toast({
                        variant: "success",
                        title: "Sukces!",
                        description: "Pomyslnie usunięto użytkownika"
                    })
                }
            }

            return (
                <>
                    <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Czy napewno chcesz usunąc użytkownika {user.username} ({user.id})?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Ta akcja jest nieodwracalna. Spowoduje trwałe usunięcie konta {user.username} ({user.id}) z bazy danych.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Anuluj</AlertDialogCancel>
                                <AlertDialogAction onClick={() => onDeleteButtonClick()}>Usuń</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
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
                            <DropdownMenuItem>Edytuj</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>Usuń</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>

            )
        },
    },
]