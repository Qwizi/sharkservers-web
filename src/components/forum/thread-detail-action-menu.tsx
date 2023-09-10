import useApi from "@/hooks/api";
import useUser from "@/hooks/user";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { GripHorizontal } from "lucide-react";
import { ThreadActionEnum } from "sharkservers-sdk";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { hasScope } from "@/lib/utils";
import { Button } from "../ui/button";

interface IThreadDetailActionMenu {
    threadId: number | undefined;
}

export default function ThreadDetailActionMenu({ threadId }: IThreadDetailActionMenu) {
    const { authenticated, user } = useUser()
    const api = useApi()
    const router = useRouter()
    console.log(user)


    async function runAction(threadId: number, action: ThreadActionEnum) {
        try {

            const response = await api.adminForum.runThreadAction(threadId, {
                action: action,
            })
            console.log(response)
            router.refresh()
            toast({
                className: "bg-green-700",
                title: `Pomyślnie wykonano akcje!`,
                description: `Twoja akcja  ${action} została wykonana pomyślnie`
            })
        } catch (e) {
            console.log(e)
            toast({
                variant: "destructive",
                title: "Wystąpił błąd!",
                description: e.message
            })
        }
    }

    async function deleteThread(threadId: number) {
        try {
            const response = await api.adminForum.adminDeleteThread(threadId)
            console.log(response)
            router.push("/forum")
            toast({
                className: "bg-green-700",
                title: `Pomyślnie usunięto temat!`,
                description: `Twój temat o id ${threadId} został pomyślnie usuniety`,
            })
        } catch (e) {
            console.log(e)
            toast({
                variant: "destructive",
                title: "Wystąpił błąd!",
                description: e.message
            })
        }
    }

    //@ts-ignore
    if (!authenticated || !user?.roles || !hasScope(user?.roles, "threads:delete") || !threadId ) return

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="float-right">
                    <span className="sr-only">Akcje</span>
                    <GripHorizontal className="h-2 w-2" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={(e) => runAction(threadId, ThreadActionEnum.CLOSE)}>
                    Zamknij
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => runAction(threadId, ThreadActionEnum.OPEN)}>
                    Otwórz
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={(e) => deleteThread(threadId)}
                    className="text-red-600"
                >
                    Usuń
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}