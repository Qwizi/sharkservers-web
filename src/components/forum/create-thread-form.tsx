'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic";
import { z } from "zod"
import { Button } from "../ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form, } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Page_CategoryOut_ } from "sharkservers-sdk";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import useApi from "@/hooks/api";
import { useEffect, useState } from "react";
import useUser from "@/hooks/user";
import useCategory from "@/hooks/category";

const MarkdownEditor = dynamic(
    () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
    { ssr: false }
);


const formSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
    category: z.string(),
    server: z.string().optional(),
    question_experience: z.string().optional(),
    question_age: z.number().optional(),
    question_reason: z.string().optional(),
})

interface ICreateThreadNormalForm {
    categories: Page_CategoryOut_
}

export default function CreateThreadForm({ categories }: ICreateThreadNormalForm) {
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            category: "",
            server: "",
            question_age: 0,
            question_reason: "",
            question_experience: ""
        },
    })
    const api = useApi()
    const { user } = useUser()
    const [servers, setServers] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const { isApplicationCategoryMany } = useCategory(categories)
    const watchCategory = form.watch("category")

    useEffect(() => {
        console.log(watchCategory)
        if (!isApplicationCategoryMany(Number(watchCategory))) return

        const getServers = async () => {
            const response = await api.servers.getServers()
            console.log(response)
            setServers(response)
        }

        getServers().catch(console.error)

        return () => setServers(undefined)
    }, [watchCategory])

    function getServerName(servers: any, serverId: number) {
        let serverName = "invalid_server_name"
        servers.items.map((server, i) => {
            if (server.id === serverId) {
                serverName = server.name
            }
        })
        return serverName
    }

    async function createDefaultThread(data: z.infer<typeof formSchema>) {
        return await api.forum.createThread({
            category: Number(watchCategory),
            title: data.title,
            content: data.content
        })
    }

    async function createApplicationThread(data: z.infer<typeof formSchema>) {
        const serverId = Number(data.server)
        const serverName = getServerName(servers, serverId)
        const title = `Podanie na Administratora - ${user?.username}`
        console.log(serverId)
        return await api.forum.createThread({
            category: Number(data.category),
            title: title,
            content: title,
            server_id: serverId,
            question_age: data.question_age,
            question_experience: data.category,
            question_reason: data.question_reason
        })
    }

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            setLoading(true)
            console.log(data)
            const categoryId = Number(data.category)
            const response = isApplicationCategoryMany(categoryId) ? await createApplicationThread(data) : await createDefaultThread(data)
            toast({
                className: "bg-green-700",
                title: "Pomyślnie utworzono temat!",
                description: `Twój temat ${data.title} został pomyślnie utworzony`
            })
            router.push(`/forum/${slugify(response.title)}-${response.id}`)
            
        } catch (e) {
            console.log(e)
            toast({
                variant: "destructive",
                title: "Wystąpil błąd",
                description: e.message
            })
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Kategoria</FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Wybierz kategorie" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categories && categories.items.map((category, i) =>
                                            <SelectItem key={i} value={String(category.id)}>{category.name}</SelectItem>

                                        )}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {isApplicationCategoryMany(Number(watchCategory)) ? (
                        <>
                            <FormField
                                control={form.control}
                                name="server"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Serwer</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue="1">
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a verified email to display" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {servers && servers.items.map((server, i) =>
                                                    <SelectItem key={i} value={String(server.id)}>{server.name}</SelectItem>

                                                )}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="question_age"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Wiek</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Wiek" {...field} type="number"
                                                onChange={(e) =>
                                                    field.onChange(
                                                        Number.isNaN(parseInt(e.target.value))
                                                            ? 0
                                                            : parseInt(e.target.value)
                                                    )} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}

                            />
                            <FormField
                                control={form.control}
                                name="question_experience"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Doświadczenie</FormLabel>
                                        <FormControl>
                                            <MarkdownEditor {...field} height="200px" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="question_reason"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dlaczego chcesz zostać administratorem?</FormLabel>
                                        <FormControl>
                                            <MarkdownEditor {...field} height="200px" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </>
                    ) : (
                        <>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tytuł</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tytuł" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Treść</FormLabel>
                                        <FormControl>
                                            <MarkdownEditor {...field} height="500px" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </>

                    )}
                    <Button disabled={loading} type="submit" className="text-white">Napisz wątek</Button>
                </form>
            </Form>
        </>

    )
}