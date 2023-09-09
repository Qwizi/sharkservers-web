'use client'
import { Page_PostOut_, ThreadActionEnum, ThreadOut } from "sharkservers-sdk"
import { Card } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Username from "../users/username"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import Post from "./post"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"
import rehypeSanitize from "rehype-sanitize"
import { Button } from "../ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form"
import { Input } from "../ui/input"
import SharkApi from "@/lib/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Pagination from "../pagination";
import slugify from "slugify";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { GripHorizontal } from "lucide-react"
import { hasScope } from "@/lib/utils";
import { toast } from "../ui/use-toast";
import dynamic from "next/dynamic"
const MarkdownEditor = dynamic(
    () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
    { ssr: false }
);
import MarkdownPreview from '@uiw/react-markdown-preview';



interface IThreadDetail {
    thread: ThreadOut,
    posts: Page_PostOut_
}

const formSchema = z.object({
    content: z.string().min(2),
})

export default function ThreadDetail({ thread, posts }: IThreadDetail) {
    const { id, title, content, author, created_at, post_count, category, is_closed } = thread
    const { data: session, status } = useSession()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            SharkApi.request.config.TOKEN = session?.access_token?.token
            const response = await SharkApi.forum.createPost({
                content: data.content,
                thread_id: id
            })
            const postsReq = await SharkApi.forum.getPosts(id, undefined, 10)
            console.log(postsReq)
            if (postsReq.total >= 10) {
                const url = `/forum/${slugify(title)}-${id}?page=${postsReq.pages}`
                await router.push(url)
                await router.refresh()
            } else {
                await router.refresh()
                await router.refresh()
            }

            toast({
                className: "bg-green-700",
                title: "Pomyślnie dodano post!",
                description: `Twój post został pomyślnie dodany.`
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

    async function runAction(threadId: number, action: ThreadActionEnum) {
        try {
            SharkApi.request.config.TOKEN = session?.access_token?.token
            const response = await SharkApi.adminForum.runThreadAction(threadId, {
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
            SharkApi.request.config.TOKEN = session?.access_token?.token
            const response = await SharkApi.adminForum.adminDeleteThread(threadId)
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

    return (
        <div className="rounded-[0.5rem] border bg-background shadow">
            <div className="space-y-6 p-10 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    <Badge>{category?.name}</Badge>
                    {is_closed ? (
                        <Badge variant="destructive">Wątek zamknięty</Badge>
                    ) : (
                        <Badge variant="secondary">Wątek otwarty</Badge>
                    )}
                </div>
                <Separator />
            </div>
            <div className="p-10 w-full flex gap-10">
                <div className="flex flex-col items-center w-1/4  rounded-[0.5rem] border p-4 text-center h-[250px]">
                    <Avatar className="h-15 w-15  mx-auto">
                        <AvatarImage src={author?.avatar} alt={`@${author?.username}`} />
                        <AvatarFallback>{author?.username}</AvatarFallback>
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
                        <div className="w-full">
                            <MarkdownPreview source={content} />
                        </div>
                        {session?.user?.roles && hasScope(session?.user?.roles, "threads:delete") && (
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="secondary" className="float-right">
                                            <span className="sr-only">Actions</span>
                                            <GripHorizontal className="h-2 w-2" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={(e) => runAction(id, ThreadActionEnum.CLOSE)}>
                                            Zamknij
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={(e) => runAction(id, ThreadActionEnum.OPEN)}>
                                            Otwórz
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            onClick={(e) => deleteThread(id)}
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
            {posts && posts.items.map((post, i) =>
                <Post key={i} {...post} />
            )}
            {status === "authenticated" && is_closed === false && (
                <div className="rounded-[0.5rem] border bg-background shadow mt-10 p-4">


                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Treść wiadomosci</FormLabel>
                                        <FormControl>
                                            <MarkdownEditor  height="250px" {...field} value={field.value}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">Dodaj odpowiedź</Button>
                        </form>
                    </Form>
                </div>
            )}

            <Pagination total={posts.total} />
        </div>
    )
}