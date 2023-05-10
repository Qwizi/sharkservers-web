import Username from "@/components/Elements/Username";
import React from "react";

interface IProps {
    last_online_users_data: {
        items: [
            {
                id: number;
                username: string;
                avatar: string;
                display_role: {
                    id: number;
                    name: string;
                    color: string;
                    is_staff: boolean;

                }
            },
        ],
        total: number;
        page: number;
        size: number;
    }
}

const LastOnlineUsersWidget: React.FC<IProps> = ({...props}) => {
    return (
        <div className="sidebar-widget-single mb-30 wow fadeInUp">
            <h4 className="sidebar-widget-title">Ostatnio Aktywni ({props?.last_online_users_data?.total})</h4>
            {props?.last_online_users_data?.items.map((user) => (
                <>
                    <Username color={user.display_role.color} username={user.username} key={user.id}/><span className={"mr-1"}>,</span>
                </>
            ))}
        </div>
    )
}

export default LastOnlineUsersWidget;