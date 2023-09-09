import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import {ApiClient, SharkServersClient} from "sharkservers-sdk"

export async function authApi(client: any): Promise<ApiClient> {
    const session = await getServerSession(authOptions)
    client.request.config.TOKEN = undefined

    if (session && session?.access_token) {
        client.request.config.TOKEN = session?.access_token.token
    }
    return client
}

const SharkApi = SharkServersClient

export default SharkApi

