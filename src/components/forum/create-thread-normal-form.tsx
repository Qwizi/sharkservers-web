'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic";
import rehypeSanitize from "rehype-sanitize";
import { z } from "zod"
import { Button } from "../ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form, FormDescription } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Page_CategoryOut_ } from "sharkservers-sdk";
import SharkApi from "@/lib/api";
import { useSession } from "next-auth/react";
import slugify from "slugify";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);


const formSchema = z.object({
    title: z.string(),
    content: z.string(),
    category: z.string()
})

interface ICreateThreadNormalForm {
    categories: Page_CategoryOut_
}

export default function CreateThreadNormalForm({ categories }: ICreateThreadNormalForm) {
    const { data: session } = useSession()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            category: "1"
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            SharkApi.request.config.TOKEN = session?.access_token?.token
            const response = await SharkApi.forum.createThread({
                category: Number(data.category),
                title: data.title,
                content: data.content
            })
            router.push(`/forum/${slugify(response.title)}-${response.id}`)
        } catch (e) {
            console.log(e)
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
                                <Select onValueChange={field.onChange} defaultValue={categories.items[0].name}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categories && categories.items.map((category, i) =>
                                            <SelectItem value={String(category.id)}>{category.name}</SelectItem>

                                        )}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                                    <MDEditor previewOptions={{
                                        rehypePlugins: [[rehypeSanitize]],
                                    }} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Napisz wątek</Button>
                </form>
            </Form>
        </>

    )
}