import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {NextApiRequest, NextApiResponse} from "next";
import apiClient from "@/lib/api";
import jwt from "jsonwebtoken";

const refreshToken = async (refresh_token: string) => {
    const res = await fetch("http://localhost/v1/auth/token/refresh", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({refresh_token: refresh_token}),
    });
    const data = await res.json();
    return data.access_token;
}
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
            const tokenData = await apiClient.auth.authLoginUser({
                // @ts-ignore
                username: credentials?.username,
                // @ts-ignore
                password: credentials?.password
            })
            apiClient.request.config.TOKEN = tokenData.access_token
            const user_info = await apiClient.users.usersGetLoggedUser()

            /*const token_res = await fetch("http://localhost/v1/auth/token", {
                method: 'POST',
                body: form,
            })
            const token = await token_res.json()

            const user_info_res = await fetch("http://localhost/v1/users/me", {
                method: 'GET',
                headers: {'Authorization': 'Bearer ' + token.access_token}
            })

            const user_info = await user_info_res.json()
            if (token_res.ok && token && user_info_res.ok && user_info) {
                return {...token, ...user_info}
            }*/
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
            console.log(`Token ${JSON.stringify(token)} User ${user}`)
            const decoded = jwt.decode(token.access_token)
            //@ts-ignore
            const tokenExpire = decoded && decoded.exp && decoded.exp * 1000 < Date.now()
            console.log(`Token expired ${tokenExpire}`)
            // @ts-ignore
            console.log(`Token expire date ${decoded.exp}`)

            if (!tokenExpire) {
                return {...token, ...user}
            }
            const refresh_access_token = await refreshToken(token.refresh_token)
            return {...token, access_token: refresh_access_token, ...user}
        },
        //@ts-ignore
        async session({session, token, user}) {
            // @ts-ignore
            session.user = token
            return session
        },

        /*

        const callbacks = {
    jwt: async ({ token, user }) => {
        if (user) {
            // This will only be executed at login. Each next invocation will skip this part.
            token.accessToken = user.data.accessToken;
            token.accessTokenExpiry = user.data.accessTokenExpiry;
            token.refreshToken = user.data.refreshToken;
        }

        // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
        const shouldRefreshTime = Math.round((token.accessTokenExpiry - 60 * 60 * 1000) - Date.now());

        // If the token is still valid, just return it.
        if (shouldRefreshTime > 0) {
            return Promise.resolve(token);
        }

        // If the call arrives after 23 hours have passed, we allow to refresh the token.
        token = refreshAccessToken(token);
        return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
        // Here we pass accessToken to the client to be used in authentication with your API
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.accessTokenExpiry;
        session.error = token.error;

        return Promise.resolve(session);
    },
}
         */
    },
    pages: {
        signIn: '/auth/login',
    },
    events: {
        // @ts-ignore
        async signIn(message) {
            console.log(message + " signed in")
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

