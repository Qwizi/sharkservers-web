'use client';
import ChatMessage from "@/components/Forum/ChatMessage";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {send_chat_message} from "@/lib/fetchApi";
import {useSession} from "next-auth/react";

interface SteamrepProfile {
    created_date: string;
    updated_date: string;
    id: number;
    profile_url: string;
    is_scammer: boolean;
    steamid64: string;
}

interface Player {
    created_date: string;
    updated_date: string;
    id: number;
    steamrep_profile: SteamrepProfile;
    username: string;
    steamid3: string;
    steamid32: string;
    steamid64: string;
    profile_url: string;
    avatar: string;
    country_code: string;
    reputation: number;
}

interface DisplayRole {
    id: number;
    name: string;
    color: string;
    is_staff: boolean;
}

interface Author {
    created_date: string;
    updated_date: string;
    id: number;
    username: string;
    is_activated: boolean;
    is_superuser: boolean;
    avatar: string;
    display_role: DisplayRole;
    players: Player[];
}

interface Item {
    created_date: string;
    updated_date: string;
    id: number;
    author: Author;
    message: string;
}

interface Response {
    items: Item[];
    total: number;
    page: number;
    size: number;
}

interface IProps {
    chat_messages_data: Response;
}


const ChatSection: React.FC<IProps> = ({chat_messages_data}) => {
    const router = useRouter()
    const {data: session} = useSession()
    const [message, setMessage] = useState("")
    const refreshMessages = async () => {
        const timer = setInterval(async () => {
            await router.refresh()
            console.log("refreshed")
        }, 5000);
    }

    useEffect(() => {
        refreshMessages()
    }, [])

    // @ts-ignore
    const sendMessage = async (e) => {
        e.preventDefault()
        const response = await send_chat_message(message, session)
        const data = await response.json()
        await refreshMessages()
        setMessage("")
    }

    return (
        <>
            <section className="popular-collections-area pt-0 pb-100">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-md-12">
                            <div className="login-inner">
                                <div className="login-content">
                                    <h4>Chat</h4>
                                    <form className="login-form" onSubmit={(e) => sendMessage(e)}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="single-input-unit">
                                                    <input type="text" id="username" placeholder="Wiadomosc"
                                                           value={message}
                                                           onChange={(e) => setMessage(e.target.value)}/>
                                                </div>
                                                <div
                                                    className="activity-wrapper-actions activity-wrapper-all mb-30">
                                                    {chat_messages_data.items.map((item) => (
                                                        <ChatMessage key={item.id} message={item.message}
                                                                     color={item.author.display_role.color}
                                                                     username={item.author.username}/>

                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChatSection