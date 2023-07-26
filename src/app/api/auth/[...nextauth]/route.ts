import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
import {SharkServersClient as shark_api } from "sharkservers-sdk";
// @ts-ignore
export const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {label: "Username", type: "text", placeholder: "jsmith"},
            password: {label: "Password", type: "password"}
        },
        // @ts-ignore
        async authorize(credentials, req) {
            const tokenData = await shark_api.auth.loginUser({
                // @ts-ignore
                username: credentials?.username,
                // @ts-ignore
                password: credentials?.password
            })
            shark_api.request.config.TOKEN = tokenData.access_token
            const user_info = await shark_api.users.getLoggedUser()
            if (tokenData && user_info) {
                return {...tokenData, ...user_info}
            }
            return null
        },
    })],
    debug: true,
    callbacks: {
        //@ts-ignore
        async jwt({token, user, trigger, session}) {
            if (trigger === 'update') {
                return {...token, ...session.user}

            }
            if (user) {
                return {...token, ...user}
            }
            const decoded = jwt.decode(token.access_token)
            //@ts-ignore
            const tokenExpire = decoded && decoded.exp && decoded.exp * 1000 < Date.now()
            // @ts-ignore
            console.log(`Token expire ${tokenExpire}`)

            if (!tokenExpire) {
                return {...token, ...user}
            }
            const refresh_token = await shark_api.auth.getAccessTokenFromRefreshToken(token.refresh_token)
            return {...token, access_token: refresh_token.access_token, ...user}
        },
        //@ts-ignore
        async session({session, token, user}) {
            // @ts-ignore
            session.user = token
            return session
        },
    },
    pages: {
        signIn: '/auth/login',
    },
    events: {
        // @ts-ignore
        async signIn(message) {
            console.log(message.token.username + " signed in")
        },
        // @ts-ignore
        async signOut(message) {
            console.log(message.token.username + " signed out")
        }
    }
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Do whatever you want here, before the request is passed down to `NextAuth`
    return await NextAuth(req, res, authOptions)
}
export {handler as GET, handler as POST}

