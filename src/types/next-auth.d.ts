import NextAuth from "next-auth";
import {User_CGQ, UserOut2Schema} from "@/client";

declare module "next-auth" {
    /*interface Session {
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
    }*/
    interface Session {
        user: User_CGQ,
        access_token: {
            token: string,
            token_type: string,
            exp: string
        }
        refresh_token: {
            token: string,
            token_type: string,
            exp: string
        }
    }
}