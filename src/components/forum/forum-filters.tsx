'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Page_CategoryOut_, Server_HDX } from "sharkservers-sdk"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Link } from "lucide-react"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "../ui/use-toast"
import { useRouter, useSearchParams } from "next/navigation"

interface IForumFilters {
    categories: Page_CategoryOut_,
    servers: {
        items: Server_HDX[],
        total: number,
        page?: number,
        size?: number,
        pages?: number
    }
}

const FormSchema = z.object({
    closed: z.string().optional(),
    server: z.string().optional(),
    order_by: z.string().optional()
})

export default function ForumFilters({ categories, servers }: IForumFilters) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            closed: "false",
            server: undefined,
            order_by: "-created_at"
        },
    })
    const categoryId = Number(searchParams.get("category"))

    const isApplicationCategory = () => {
        let is_application = false
        categories.items.forEach((category, i) => {
            if (categoryId == category.id && category.type == "application") {
                is_application = true
            }
        })
        return is_application
    }

    console.log(isApplicationCategory())

    function onSubmit(data: z.infer<typeof FormSchema>) {
        let url = `/forum?category=${categoryId}`
        
        if (data.closed) {
            url += `&closed=${data.closed}`
        }
        if (data.server && Number(data.server) > 0)
        {
            url += `&server=${data.server}`
        }
        if (data.order_by) {
            url += `&order_by=${data.order_by}`
        }
        router.push(url)
    }
    return (
        <div className="flex items-start justify-between p-4 border">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
                    <FormField
                        control={form.control}
                        name="closed"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Wątek zamknięty?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Wątek zamknięty" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="true">Tak</SelectItem>
                                        <SelectItem value="false">Nie</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    {isApplicationCategory() && (
                        <FormField
                            control={form.control}
                            name="server"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Server</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue="0">
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Serwer" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="0">Brak</SelectItem>
                                            {servers && servers.items.map((server, i) => 
                                                <SelectItem key={i} value={String(server.id)}>{server.name}</SelectItem>
                                            )}

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    <FormField
                        control={form.control}
                        name="order_by"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sortuj</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue="created_desc">
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Filtruj po" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="-created_at">Data utworzenia malejąco</SelectItem>
                                        <SelectItem value="created_at">Data utworzenia rosnąco</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Zapisz</Button>
                </form>
            </Form>
        </div>
    )
}