import Link from "next/link";

type UsernameType = {
    id: number | undefined,
    color: string | undefined;
    username: string | undefined; 
}
export default function Username({id, color, username}: UsernameType) {
    return (
        <Link key={id} href={`/profile/${id}-${username}`} style={{color: color}}>{username}</Link>
    )
}