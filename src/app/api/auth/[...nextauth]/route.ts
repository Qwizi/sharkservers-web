import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextApiRequest, NextApiResponse } from "next";
import { SharkServersClient as shark_api } from "sharkservers-sdk";
import {sharkApi} from "@/lib/server-api";

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
                const tokenData = await api.auth.loginUser({
                    username: credentials.username,
                    password: credentials.password
                })
                api.request.config.TOKEN = tokenData.access_token.token
                api.request.config.HEADERS = {"user-agent": req.headers['user-agent']}
                const user_info = await api.users.getLoggedUser()
                if (!tokenData || !user_info) return null
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
            const tokenExpire = token.access_token.exp && Date.parse(token.access_token.exp) < Date.now()
            console.log(tokenExpire)
            if (!tokenExpire) {
                return { ...token, ...user }
            }
            try {
                const api = await sharkApi()
                const refresh_token = await api.auth.getAccessTokenFromRefreshToken({
                    refresh_token: token.refresh_token.token
                })
                return { ...token, access_token: { ...refresh_token.access_token }, ...user }
            } catch (e) {
                console.log(e)
                return {
                    error: "RefreshAccessTokenError",
                }
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
        signIn: ({user, acccount, isNewUser}) => {console.log(`User ${user.username} zalogowal się`)},
        signOut: async ({token}) => {
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