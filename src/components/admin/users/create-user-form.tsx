'use client';

import { adminCreateUserAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { CreateUserSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function CreateUserForm() {
    const form = useForm<z.infer<typeof CreateUserSchema>>({
        resolver: zodResolver(CreateUserSchema),
    })
    const router = useRouter()

    async function onSubmit(data: z.infer<typeof CreateUserSchema>) {
        const response = await adminCreateUserAction(data)
        console.log(response)
        if (response.serverError) {
            toast({
                variant: "destructive",
                title: "Oh nie. Wystapil bład",
                description: response.serverError
            })
        } else {
            toast({
                variant: "success",
                title: "Sukces!",
                description: "Pomyslnie utworzono użytkownika"
            })
            form.reset()
            router.push("/admin/users")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nazwa użytkownika</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Hasło</FormLabel>
                            <FormControl>
                                <Input {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="is_activated"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Aktywowany</FormLabel>
                            <FormControl>
                                <Input {...field} type="checkbox" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="is_superuser"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Superużytkownik</FormLabel>
                            <FormControl>
                                <Input {...field} type="checkbox" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button type="submit">Aktualizuj</Button>
            </form>
        </Form>
    )
}