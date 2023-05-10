import {Inter} from 'next/font/google'
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import {AuthGetApi} from "@/lib/fetchApi";

const inter = Inter({subsets: ['latin']})

// @ts-ignore
const fetchUserData = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await AuthGetApi("/v1/users/me")
    if (res.status !== 200) {
        throw new Error('Failed to fetch data');
    }
    return await res.json()
}

export default async function Home() {
    const user_data = await fetchUserData()
    console.log(user_data)
    return (
        <h1>Hello World</h1>
    )
}
