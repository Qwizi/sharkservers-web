'use client';
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import SharkApi from "@/lib/api";
import { toast } from "../ui/use-toast";
import useApi from "@/hooks/api";


const formSchema = z.object({
    code: z.string().min(5).max(5)
})


export default function ActivateAccountForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: "",
        },
    })
    const api = useApi()

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            const response = await api.auth.activateUser({
                code: data.code
            })
            console.log(response)
            toast({
                variant: "default",
                title: "Sukces!",
                description: "Pomyślnie aktywowano konto"
            })
        } catch(e) {
            console.log(e)
            let errorMessage = "Wystapil nieoczekiwany bład"
            if (e.status === 400) {
                errorMessage = "Niepoprawny kod aktywacyjny"
            }
            toast({
                variant: "destructive",
                title: "Uh oh! Wystąpil bład.",
                description: errorMessage,
                //action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kod aktywacyjny</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Aktywuj konto</Button>
            </form>
        </Form>
    )
}