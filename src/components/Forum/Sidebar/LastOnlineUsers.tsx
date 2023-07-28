import Username from "@/components/Elements/Username";
import React from "react";
import {Page_User_LVF_} from "@/client";

interface IProps {
    last_online_users_data: Page_User_LVF_
}

const LastOnlineUsersWidget: React.FC<IProps> = ({...props}) => {

    return (
        <div className="sidebar-widget-single mb-30 wow fadeInUp">
            <h4 className="sidebar-widget-title">Ostatnio Aktywni ({props?.last_online_users_data?.total})</h4>
            {props?.last_online_users_data?.items.map((user) => (
                <>
                    <Username color={user.display_role.color || "gray"} username={user.username} key={user.id} id={user.id}/><span className={"mr-1"}>,</span>
                </>
            ))}
        </div>
    )
}

export default LastOnlineUsersWidget;