import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const BASE_URL = process.env.API_URL

async function refreshToken(refresh_token: string) {
    const res = await fetch(BASE_URL + "/v1/auth/token/refresh/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({refresh_token: refresh_token}),
    });
    const data = await res.json();
    console.log(data)
    return data.access_token;
}

export async function AuthGetApi(url: string) {
    const session: Session | null = await getServerSession(authOptions);
    console.log("before: ", session?.user.access_token);

    let res = await fetch(BASE_URL + url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session?.user.access_token}`,
        },
    });

    if (res.status == 401) {
        if (session) session.user.access_token = await refreshToken(session?.user.refresh_token ?? "");
        console.log("after: ", session?.user.access_token);

        res = await fetch(BASE_URL + url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${session?.user.access_token}`,
            },
        });
        return res
    }

    return res
}

export async function AuthPostApi(url: string, data: any) {
    const session: Session | null = await getServerSession(authOptions);
    console.log("before: ", session?.user.access_token);

    let res = await fetch(BASE_URL + url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session?.user.access_token}`,
        },
        body: JSON.stringify(data),
    });

    if (res.status == 401) {
        if (session) session.user.access_token = await refreshToken(session?.user.refresh_token ?? "");
        console.log("after: ", session?.user.access_token);

        res = await fetch(BASE_URL + url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session?.user.access_token}`,
            },
            body: JSON.stringify(data),
        });
        return res
    }

    return res
}