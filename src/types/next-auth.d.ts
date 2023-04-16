import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            token_type: string;
            access_token: string;
            refresh_token: string;
        }
    }
}