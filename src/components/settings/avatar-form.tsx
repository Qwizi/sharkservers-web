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
import { useSession } from "next-auth/react";


const formSchema = z.object({
    avatar:  z.any()
})


export default function AvatarForm() {
    const { data: session, update } = useSession()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            avatar: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(data)
        
        try {
            const formData = new FormData();
            formData.append("file", data.avatar[0]);
            console.log(formData)
            SharkApi.request.config.TOKEN = session?.access_token.token
            const response = await SharkApi.users.uploadUserAvatar({
                avatar: data.avatar
            })
            await update({
                ...session,
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
        
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field: { value, onChange, ...field }}) => (
                        <FormItem>
                            <FormLabel>Avatar</FormLabel>
                            <FormControl>
                                <Input {...field} type="file" value={value?.fileName}
                                onChange={(event) => {
                                    onChange(event.target.files[0]);
                                }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Przeslij</Button>
            </form>
        </Form>
    )
}