import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import MainTab from "@/components/Account/MainTab";

export default function MainPage() {
    return <MainTab />
}