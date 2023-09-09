'use client'

import SharkApi from "@/lib/api"
import { useSession } from "next-auth/react"

export default function useApi() {
    const {data: session, status} = useSession()

    if (status == "authenticated") {
        SharkApi.request.config.TOKEN = session?.access_token?.token
    }

    return SharkApi
}