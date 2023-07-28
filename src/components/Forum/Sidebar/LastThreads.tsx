import React from "react";
import {Page_ThreadOut_} from "@/client";
import Username from "@/components/Elements/Username";
import Link from "next/link";

const LastThreads: React.FC<Page_ThreadOut_> = ({...props}) => {
    return (<div className="sidebar-widget-single mb-30 wow fadeInUp">
        <h4 className="sidebar-widget-title">Ostatnie tematy</h4>
        {props.items.map((thread) => (
            <>
                <div className="activity-wrapper-action-single pos-rel">
                    <div className="activity-3dots-menu">
                        <Username color={thread.author.display_role.color} username={thread.author.username} />
                    </div>
                    <div className="activity-meta-text">
                        <div className="actvity-text"><Link href={`/thread/${thread.id}`} className={"text-btn"}>{thread?.title}</Link></div>
                        <div className="activity-time">5 minutes ago</div>
                    </div>
                </div>
            </>
        ))}

    </div>)
}

export default LastThreads