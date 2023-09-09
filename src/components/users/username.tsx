'use client'
import Link from "next/link";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import UserAvatar from "./avatar";
import RoleBadge from "./role-badge";
import { UserOut } from "sharkservers-sdk";

interface IUsername {
    user: UserOut
    className?: string | undefined
}
export default function Username({ user, className }: IUsername) {
    return (
        <HoverCard >
            <HoverCardTrigger className={className} key={user.id} href={`/profile/${user.id}-${user.username}`} style={{ color: user.display_role?.color }}>
                {user.username}
            </HoverCardTrigger>
            <HoverCardContent className="w-[200px] h-[150px] flex flex-col items-center">
                <UserAvatar avatar={user.avatar} username={user.username} className="h-12 w-12 mx-auto"/>
                <div><span style={{ color: user.display_role?.color }} className="ml-2 mx-auto">{user.username}</span></div>
                <RoleBadge {...user.display_role}/>
            </HoverCardContent>
        </HoverCard>

    )
}