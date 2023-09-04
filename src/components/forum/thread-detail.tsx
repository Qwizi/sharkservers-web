'use client'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { Page_PostOut_, ThreadOut } from "sharkservers-sdk"
import { Card } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Username from "../users/username"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import ReactMarkdown from "react-markdown"
import MarkdownPreview from "@uiw/react-markdown-preview";
import Post from "./post"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"
import MDEditor from "@uiw/react-md-editor"
import rehypeSanitize from "rehype-sanitize"
import { Button } from "../ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form"
import { Input } from "../ui/input"
import SharkApi from "@/lib/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Pagination from "../pagination";
import slugify from "slugify";

interface IThreadDetail {
    thread: ThreadOut,
    posts: Page_PostOut_
}

const formSchema = z.object({
    content: z.string(),
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

        } catch (e) {
            console.log(e)
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
                    <ReactMarkdown children={content} />

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
                                            <MDEditor previewOptions={{
                                                rehypePlugins: [[rehypeSanitize]],
                                            }} {...field} />
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