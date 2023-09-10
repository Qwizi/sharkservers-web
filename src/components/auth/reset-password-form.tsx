'use client'
import useApi from "@/hooks/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
    email: z.string().email()
})

interface IResetPasswordForm {
    setTab: Function;
}

export default function ResetPasswordForm({setTab}: IResetPasswordForm) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })
    const api = useApi()

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const response = api.auth.forgotPasswordRequest({email: data.email})
            console.log(response)
            setTab("confirm")
            toast({
                variant: "default",
                title: "Sukces!",
                description: "Pomyślnie wysłano e-mail z kodem aktywacyjnym"
            })
        } catch(e) {
            console.log(e)
            toast({
                variant: "destructive",
                title: "Uh oh! Wystąpil bład.",
                description: e.message,
                //action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input {...field} 
                                type="email"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Resetuj hasło</Button>
            </form>
        </Form>
    )
}
