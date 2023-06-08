import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {NextApiRequest, NextApiResponse} from "next";
// @ts-ignore

// @ts-ignore
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
        async authorize(credentials, req) {
            const form = new FormData();
            // @ts-ignore
            form.append("username", credentials?.username);// @ts-ignore=
            form.append("password", credentials?.password);
            const token_res = await fetch("http://localhost/v1/auth/token", {
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
            console.log(`Token ${token} User ${user}`)
            return {...token, ...user}
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
            console.log(message + " signed in")
        },
        // @ts-ignore
        async signOut(message) {
            console.log(message.token.username + " signed out")
        }
    }
}
const handler = async (req: NextApiRequest, res: NextApiResponse)=>  {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, authOptions)
}
export {handler as GET, handler as POST}

