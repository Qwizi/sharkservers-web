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
import OnlineStatus from "./online-status";
import UserInfo from "./user-info";

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
            <HoverCardContent className="w-[200px] h-[150px]">
                <UserInfo user={...user} />
            </HoverCardContent>
        </HoverCard>

    )
}