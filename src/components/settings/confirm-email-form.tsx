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

const formSchema = z.object({
    code: z.string().min(5).max(5)
})

export default function ConfirmEmailCode() {
    const {data: session} = useSession()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            SharkApi.request.config.TOKEN = session?.access_token.token
            const response = await SharkApi.users.confirmChangeUserEmail({
                code: data.code
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
                <Button type="submit">
                    Potwierdz zmiane
                </Button>
            </form>
        </Form>
    )
}