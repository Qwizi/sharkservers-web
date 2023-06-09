import UserCard from "@/components/Users/UserCard";
import React from "react";
import {Page_UserOut2Schema_} from "@/client";

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

const UsersMain: React.FC<Page_UserOut2Schema_> = ({...props}) => {
    const {items: users} = props;
    return (

        <section className="creator-area pt-130 pb-100">
            <div className="container">
                <div className="row wow fadeInUp">
                    {users.map((user, index) => {

                        return (// @ts-ignore
                            <UserCard key={index} username={user.username} color={user.display_role.color}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default UsersMain;