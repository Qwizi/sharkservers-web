import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {toast} from "react-toastify";
import {signIn, SignInResponse} from "next-auth/react";
import {ReactText} from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:80"

async function refreshToken(refresh_token: string) {
    const res = await fetch(BASE_URL + "/v1/auth/token/refresh", {
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

export async function AuthPostApi(url: string, data: any, session: Session | null) {
    console.log("before: ", session?.user.access_token);

    let res = await fetch(BASE_URL + url, {
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + session?.user.access_token,
        },
        method: 'POST',
    });

    if (res.status == 401) {
        if (session) session.user.access_token = await refreshToken(session?.user.refresh_token ?? "");
        console.log("after: ", session?.user.access_token);

        res = await fetch(BASE_URL + url, {
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + session?.user.access_token,
            },
            method: 'POST',
        });
        return res
    }

    return res
}

export async function login_user(username: string, password: string) {
    const notification = toast.loading("Ładuje....")
    try {
        const response: SignInResponse | undefined = await signIn('credentials', {
            username: username,
            password: password,
            redirect: false,
        })
        // @ts-ignore
        if (response.ok && response.error) {
            // @ts-ignore
            throw new Error(response.error)
        }
        toast.update(notification, {
            render: "Zalogowano",
            type: "success",
            isLoading: false,
            autoClose: 5000
        })
        return response
    } catch (e: any) {
        toast.update(notification, {
            render: e.message,
            type: "error",
            isLoading: false,
            autoClose: 5000
        })
        return e
    }
}

export async function activate_account(code: string) {
    return await fetch(BASE_URL + "/v1/auth/activate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({code: code}),
    });
}

export async function resend_activation_code(email: string) {
    return await fetch(BASE_URL + "/v1/auth/activate/resend", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email}),
    });
}

export async function change_username(username: string, session: Session | null) {
    return await AuthPostApi("/v1/users/me/username", JSON.stringify({username: username}), session);
}

export async function send_chat_message(message: string, session: Session | null) {
    return await AuthPostApi("/v1/chat", JSON.stringify({message: message}), session);
}

export async function get_servers_status() {
    return await fetch(BASE_URL + "/v1/servers/status");
}

const notification = (notification: ReactText, message: string, type: "error" | "success") => {
    toast.update(notification, {
        render: message,
        type: type,
        isLoading: false,
        autoClose: 5000
    })
}
const success_notification = (notification_ref: ReactText, message: string) => {
    notification(notification_ref, message, "success")
}

const error_notification = (notification_ref: ReactText, message: string) => {
    notification(notification_ref, message, "error")
}

export async function create_post(thread_id: number, content: string, session: Session | null) {
    const notification = toast.loading("Ładuje....")
    try {
        const res = await AuthPostApi("/v1/forum/posts", JSON.stringify({ thread_id: thread_id, content: content}), session);
        if (!res.ok) {
            throw new Error("Nie udało się dodać posta")
        }
        success_notification(notification, "Dodano post")
        return res
    } catch (e: any) {
        error_notification(notification, e.message)
    }
}