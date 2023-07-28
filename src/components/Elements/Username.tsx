import React from "react";
import Link from "next/link";

interface IProps {
    color: string | undefined;
    username: string | undefined;
    id: number | undefined;
}

const Username: React.FC<IProps> = ({username, color, id}) => {
    return (
        <Link href={`/profile/${id}`}><span style={{color: color}}>{username}</span></Link>
    )
}

export default Username;