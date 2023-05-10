import LoginMain from "@/components/Auth/LoginMain";
import TitleSection from "@/components/Layout/TitleSection";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const isUserLogged = async () => {
    const session: Session | null = await getServerSession(authOptions)
    return session?.user
}

export default async function LoginPage() {
    const user_logged = await isUserLogged()
    if (user_logged) {
        redirect("/forum")
    }
    return (
        <>
            <TitleSection title={"Zaloguj się"} />
            <LoginMain />
        </>
    )
}