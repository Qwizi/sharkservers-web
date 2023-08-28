'use client'
import { useSession } from "next-auth/react";
import { Separator } from "../ui/separator";
import Image from "next/image"
import AvatarForm from "./avatar-form";

export default function AvatarTab() {
    const {data: session} = useSession()
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Avatar</h3>
                <p className="text-sm text-muted-foreground">
                    Zaaktualizuj avatar
                </p>
            </div>
            <Separator />
            <Image src={session?.user?.avatar} width="100" height="100" />
            <Separator />
            <AvatarForm />
        </div>
    )
}