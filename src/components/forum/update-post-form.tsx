import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import rehypeSanitize from "rehype-sanitize"
import { Button } from "../ui/button"
import dynamic from "next/dynamic"
import { forwardRef, useRef } from "react"
import { toast } from "../ui/use-toast"
import SharkApi from "@/lib/api"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const MarkdownEditor = dynamic(
    () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
    { ssr: false }
);

const formSchema = z.object({
    content: z.string().min(2),
})

interface IUpdatePostForm {
    postId: number
    content_prop: string
    setEditPost: Function
}

export default function UpdatePostForm({postId, content_prop, setEditPost}: IUpdatePostForm) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: content_prop,
        },
    })
    const { data: session, status } = useSession()
    const router = useRouter()


    async function onSubmit(data: z.infer<typeof formSchema>, postId: number, setEditPost: Function) { 
        try {
            SharkApi.request.config.TOKEN = session?.access_token?.token
            const response = await SharkApi.forum.updatePost(postId, {
                content: data.content,
            })
            console.log(response)
            toast({
                className: "bg-green-700",
                title: "Pomyślnie zaaktualizowano post",
                description: ``
            })
            setEditPost(false)
            router.refresh()
        } catch(e) {
            toast({
                variant: "destructive",
                title: "Wystapił błąd!",
                description: e.message
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((e) => onSubmit(e, postId, setEditPost))} className="space-y-8">
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Treść wiadomosci</FormLabel>
                            <FormControl>
                                <MarkdownEditor  height="250px" {...field} value={field.value} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Dodaj odpowiedź</Button>
            </form>
        </Form>
    )
}