import { PostOut, ThreadActionEnum } from "sharkservers-sdk";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ReactMarkdown from "react-markdown";
import Username from "../users/username";
import { Badge } from "../ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import SharkApi from "@/lib/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GripHorizontal } from "lucide-react"
import { hasScope } from "@/lib/utils";


export default function Post({ ...props }: PostOut) {
    const { id, author, content } = props
    const { data: session, status } = useSession()
    const router = useRouter()

    async function deletePost(postId: number) {
        try {
            try {
                SharkApi.request.config.TOKEN = session?.access_token?.token
                const response = await SharkApi.adminForum.adminDeletePost(postId)
                console.log(response)
                router.refresh()
            } catch (e) {
                console.log(e)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div id={`post-${id}`} className="rounded-[0.5rem] border bg-background shadow">
            <div className="p-10 w-full flex gap-10">
                <div className="flex flex-col items-center w-1/4  rounded-[0.5rem] border p-4 text-center h-[250px]">
                    <Avatar className="h-15 w-15  mx-auto">
                        <AvatarImage src={author?.avatar} alt={`@${author?.username}`} />
                        <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <div className="mt-2">
                        <Username id={author?.id} username={author?.username} color={author?.display_role?.color} />

                    </div>
                    <div>
                        <Badge variant="outline" style={{ color: author?.display_role?.color }}>{author?.display_role?.name}</Badge>
                    </div>
                </div>
                <div className="flex flex-col rounded-[0.5rem] border p-10 w-full">
                    <div className="ml-auto flex w-full justify-between">
                        <div>
                            <ReactMarkdown>
                                {content}
                            </ReactMarkdown>
                        </div>
                        {session?.user?.roles && hasScope(session?.user.roles, "posts:delete") && (
                            <div><DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="secondary" className="float-right">
                                        <span className="sr-only">Actions</span>
                                        <GripHorizontal className="h-2 w-2" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={(e) => deletePost(id)}
                                        className="text-red-600"
                                    >
                                        Usuń
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu></div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}