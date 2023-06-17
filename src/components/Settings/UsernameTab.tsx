'use client';
import {useSession} from "next-auth/react";
import {useState} from "react";
import {change_username} from "@/lib/fetchApi";
import {toast} from "react-toastify";

const UsernameTab = () => {
    const {data: session, update} = useSession()
    const [username, setUsername] = useState(session?.user?.username)

    // @ts-ignore
    const onSubmit = async (e) => {
        e.preventDefault()
        if (!username) return
        const response = await toast.promise(
            change_username(username, session),
            {
                pending: 'Laduje...',
                success: 'Zmieniono nazwe uzytkownika',
                error: 'Wystapil problem 🤯'
            }
        );
        console.log(response)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json()
        console.log(data)
        await update({
            ...session,
            user: {
                ...session?.user,
                username: username
            }
        })
    }

    return (
        <div className="creator-info-personal mb-40 wow fadeInUp">
            <form className="personal-info-form" action="#" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label>Nazwa użytkownika</label>
                            <input type="text" defaultValue={session?.user?.username} value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="personal-info-btn">
                    <button type={"submit"} id="update-btn" className="fill-btn">Aktualizuj</button>
                </div>
            </form>
        </div>
    )
}

export default UsernameTab