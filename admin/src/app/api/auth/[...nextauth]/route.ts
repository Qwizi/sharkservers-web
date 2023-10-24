import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextApiRequest, NextApiResponse } from "next";
import { sharkApi } from "@/lib/server-api";
import jwt from "jsonwebtoken";
import getCsrfToken from "next-auth/"


// @ts-ignore
export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET, session: {
        strategy: 'jwt',
    }, providers: [CredentialsProvider({
        name: 'Credentials', credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        },
        //@ts-ignore
        async authorize(credentials, req) {
            if (credentials === undefined) return null
            try {
                const api = await sharkApi()
                api.request.config.HEADERS = { "user-agent": req.headers['user-agent'] }
                const tokenData = await api.auth.loginUser({
                    username: credentials.username,
                    password: credentials.password
                })
                api.request.config.TOKEN = tokenData.access_token.token

                const user_info = await api.users.getLoggedUser()
                if (!tokenData || !user_info || !user_info.is_superuser) return null
                return { ...user_info, ...tokenData }
            } catch (e) {
                console.log(e)
                return null
            }
        },
    })], debug: true, callbacks: {
        //@ts-ignore
        async jwt({ token, user, trigger, session }) {
            if (trigger === 'update') {
                return { ...token, ...session.user }

            }
            if (user) {
                return { ...token, ...user }
            }
            try {
                var decoded = jwt.verify(token.access_token.token, process.env.API_SECRET || "invalid secret");
                console.log(decoded)
                

                const tokenExpire = token.access_token.exp && Date.parse(token.access_token.exp) < Date.now()
                if (tokenExpire) {
                    const api = await sharkApi()
                    console.log(api)
                    const refresh_token = await api.auth.getAccessTokenFromRefreshToken({
                        refresh_token: token.refresh_token.token
                    })
                    console.log(refresh_token)
                    return { ...token, access_token: { ...refresh_token.access_token }, ...user }
                }
                return { ...token, ...user }
            } catch (e) {
                console.log(e)
                const csrfTokenResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/csrf`)
                const csrfTokenData = await csrfTokenResponse.json()
                const signOutResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signout`, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: csrfTokenData
                    })
                })
                console.log(signOutResponse)
                return null
            }


        }, //@ts-ignore
        async session({ session, token, user }) {
            // @ts-ignore
            const { access_token, refresh_token, ...newToken } = token
            session.user = newToken
            session.access_token = access_token
            session.refresh_token = refresh_token
            return session
        },
    }, pages: {
        signIn: '/auth/login',
    }, events: {
        signIn: ({ user, acccount, isNewUser }) => { console.log(`User ${user.username} zalogowal się`) },
        signOut: async ({ token }) => {
            try {
                const api = await sharkApi()
                api.request.config.TOKEN = token.access_token.token
                const response = await api.auth.logoutUser()
                console.log(response)
                console.log(`User ${token.username} wylogowal sie`)
            } catch (e) {
                console.log(e)
            }

        }
    }
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Do whatever you want here, before the request is passed down to `NextAuth`
    return await NextAuth(req, res, authOptions)
}
export { handler as GET, handler as POST }