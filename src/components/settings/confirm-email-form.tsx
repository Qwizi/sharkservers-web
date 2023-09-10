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
import { useState } from "react";
import { useSession } from "next-auth/react";
import useApi from "@/hooks/api";
import useUser from "@/hooks/user";

const formSchema = z.object({
    code: z.string().min(5).max(5)
})

interface IConfirmEmailCode {
    setOpen: Function
}

export default function ConfirmEmailCode({setOpen}: IConfirmEmailCode) {
    const {update, data: session} = useSession()
    const {user} = useUser()
    const api = useApi()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>, setOpen: Function) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            
            const response = await api.users.confirmChangeUserEmail({
                code: data.code
            })
            setOpen(false)
            await update({
                ...session,
                user: {
                    ...session?.user,
                    email: response.email
                }
            })
            toast({
                className: "bg-green-700",
                title: "Pomyślnie zaaktualizowano e-mail",
                description: `Twój e-mail został zaaktualizowany.`
            })
        } catch (e) {
            console.log(e)
            toast({
                variant: "destructive",
                title: "Wystapil blad!",
                description: e.message
            })
        } 
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((e) => onSubmit(e, setOpen))} className="space-y-8">
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
                <Button type="submit">
                    Potwierdz zmiane
                </Button>
            </form>
        </Form>
    )
}