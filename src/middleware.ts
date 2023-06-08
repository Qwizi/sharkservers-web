import {withAuth} from "next-auth/middleware"


// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
    callbacks: {
        async authorized({req, token}) {
            // `/me` only requires the user to be logged in
            // @ts-ignore
            return !!token
        },
    },
})

export const config = {matcher: ["/forum/create", "/settings/:path*"]}