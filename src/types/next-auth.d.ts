import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            username: string;
            is_active: boolean;
            is_superuser: boolean;
            roles: [
                {
                    id: number;
                    name: string;
                    color: string;
                    is_staff: boolean;
                }
            ];
            avatar: string;
            created_date: date;
            display_role: {
                id: number;
                name: string;
                color: string;
                is_staff: boolean;
            }
            last_login: date;
            email: string;
            token_type: string;
            access_token: string;
            refresh_token: string;
        }
    }
}