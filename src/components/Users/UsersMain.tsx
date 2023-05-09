import UserCard from "@/components/Users/UserCard";
import React from "react";

interface IProps {
    users_data: {
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

const UsersMain: React.FC<IProps> = ({...props}) => {
    return (
        <section className="creator-area pt-130 pb-100">
            <div className="container">
                <div className="row wow fadeInUp">
                    {props?.users_data?.items.map((item, index) => {
                        return (
                            <UserCard key={index} username={item.username} color={item.display_role.color}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default UsersMain;