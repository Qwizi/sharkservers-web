import { UserOut } from "sharkservers-sdk";
import UserAvatar from "./avatar";
import Username from "./username";
import user from "@/hooks/user";
import OnlineStatus from "./online-status";
import RoleBadge from "./role-badge";
import { dateFormatter, dateTimeFormatter } from "@/lib/utils";


interface IUserInfo {
    user: UserOut,
    className?: string | undefined
    avatarClassName?: string | undefined
    usernameClassName?: string | undefined
    badgeClassName?: string | undefined
    onlineStatusClassName?: string | undefined
}

export default function UserInfo({ user, className, avatarClassName, usernameClassName, badgeClassName, onlineStatusClassName }: IUserInfo) {
    if (!user) return
    const { avatar, username, display_role, last_online, created_at } = user;
    return (
        <div className={className ? className : "flex flex-col items-center text-center"}>
            <UserAvatar
                avatar={avatar}
                username={username}
                className={avatarClassName ? avatarClassName : "h-12 w-12 mx-auto"}
            />
            <div className="flex">
                <Username
                    user={...user}
                    className={usernameClassName ? usernameClassName : "mt-2"}
                />
                <OnlineStatus last_online_date={last_online} />
            </div>
            <RoleBadge {...display_role} />
            <div>
                <span className="text-slate-500 text-sm">Dołączył: {dateFormatter.format(new Date(created_at))}</span>
            </div>

        </div>

    )

}