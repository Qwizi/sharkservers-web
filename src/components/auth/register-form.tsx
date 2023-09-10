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
import { useRouter } from "next/navigation";
import SharkApi from "@/lib/api";
import { useToast } from "@/components/ui/use-toast"

import * as ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import useApi from "@/hooks/api";


const formSchema = z.object({
    username: z.string().min(2).max(32).regex(new RegExp('^[a-zA-Z0-9_-]+$'), "Nazwa użytkownika musi zawierac tylko litery, cyfry oraz znaki specjalne - _"),
    email: z.coerce.string().email(),
    password: z.string().min(8),
    password2: z.string().min(8)
})
.refine((data) => data.password === data.password2, {
    message: "Hasła nie sa takie same",
    path: ["password"],
})


interface IRegisterForm {
    setOpenDialog: Function
}


export default function RegisterForm({setOpenDialog}: IRegisterForm) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            password2: ""
        },
    })
    const { toast } = useToast()
    const api = useApi()


    async function onSubmit(values: z.infer<typeof formSchema>, setOpenDialog: Function) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            const response = await api.auth.register({username: values.username, email: values.email, password: values.password, password2: values.password2})
            router.push("/auth/activate-account?registration=true")
            console.log(response)
        } catch (e) {
            console.log(e)
            let error_message = "Wystąpil nie oczekiwany bład!"
            if (e.status == 422) {
                error_message = "Podany email lub nazwa użytkownika jest juz zajęta"
            }
            else if (e.status == 429) {
                error_message = "Zwolnij troche!"
            }
            toast({
                variant: "destructive",
                title: "Uh oh! Wystąpil bład.",
                description: error_message,
                //action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(data => onSubmit(data, setOpenDialog))} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nazwa użytkownika</FormLabel>
                            <FormControl>
                                <Input placeholder="nazwa użytkownika" {...field} />
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
                                <Input type="email" {...field} placeholder="username@website.pl" {...field} />
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
                                <Input type="password" {...field} placeholder="hasło" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password2"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Powtórz hasło</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} placeholder="hasło" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="g-recaptcha" data-sitekey="6LcfKN0nAAAAAEldDutKmu8OMlmiLgFJQsRkLYdG" type="submit" data-action='submit'>Zarejestruj się</Button>
            </form>
        </Form>
    )
}