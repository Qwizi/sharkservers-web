import { withAuth } from "next-auth/middleware"
import {decode, getToken} from "next-auth/jwt";
import {decodeJwt} from "jose";


// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    async authorized({ req, token }) {
      // `/me` only requires the user to be logged in
      // @ts-ignore

      if (!token) {
        return false
      }
      return !!token
    },
  },
})

export const config = { matcher: ["/forum/create"] }