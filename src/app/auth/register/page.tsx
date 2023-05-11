import RegisterMain from "@/components/Auth/RegisterMain";
import TitleSection from "@/components/Layout/TitleSection";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

const getSession = async () => {
    return await getServerSession()
}

export default async function RegisterPage() {
    const session = await getSession()
    if (session?.user) {
        redirect('/')
    }
    return (
        <div>
            <TitleSection title={"Zarejestruj sie"}/>
            <RegisterMain/>
        </div>
    );
}