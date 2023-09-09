import Link from "next/link";

type UsernameType = {
    id: number | undefined,
    color: string | undefined;
    username: string | undefined;
    className?: string | undefined;
}
export default function Username({id, color, username, className}: UsernameType) {
    return (
        <Link className={className} key={id} href={`/profile/${id}-${username}`} style={{color: color}}>{username}</Link>
    )
}