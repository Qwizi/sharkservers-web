import {Inter} from 'next/font/google'
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import {AuthGetApi} from "@/lib/fetchApi";

const inter = Inter({subsets: ['latin']})

export default async function Home() {
    return (
        <h1>Hello World</h1>
    )
}
