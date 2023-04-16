import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {json} from "stream/consumers";

// @ts-ignore
const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...'
        name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
        credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
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
            const user = {
            ...user_info,
                token: token
            }
          // If no error and we have user data, return it
          if (token_res.ok && token && user_info_res.ok && user_info) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        },
        })],
    debug: true,
    callbacks: {
        //@ts-ignore
        async jwt({token, user}) {
            console.log(user)
            return {...token, ...user}
        },
        //@ts-ignore
        async session({ session, token, user }) {
            console.log("Token" + token)
            // @ts-ignore
            session.user = token
            return session
        }
    }
}

);
export { handler as GET, handler as POST }

