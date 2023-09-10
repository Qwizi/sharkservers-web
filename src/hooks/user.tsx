'use client'

import { useSession } from "next-auth/react"

export default function useUser() {
    const { data: session, status } = useSession()

    function hasScope(roles: any, scope: string) {
        let has = false
        roles.map((role) => {
            role.scopes.map((item) => {
                const scopeSplit = scope.split(":")
                const app_name = scopeSplit[0]
                const value = scopeSplit[1]
                if (item.app_name == app_name && item.value == value) {
                    has = true
                }
            })
        })

        return has
    }

    function isAuthor(resourceId: number) {
        return session?.user.id === resourceId
    }

    return {
        user: session?.user,
        access_token: session?.access_token,
        refresh_token: session?.refresh_token,
        status: status,
        authenticated: status === 'authenticated',
        hasScope: hasScope,
        isAuthor: isAuthor
    }
}