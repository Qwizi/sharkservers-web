'use client'

import SharkApi from "@/lib/api"
import useUser from "./user"

export default function useApi() {
    const {authenticated, access_token} = useUser()
    
    if (authenticated) {
        SharkApi.request.config.TOKEN = access_token?.token
    }

    console.log(SharkApi.request)

    return SharkApi
}