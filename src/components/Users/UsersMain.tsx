'use client'

import UserSingle from "@/components/Users/UserSingle";
import Breadcrumbs from "@/components/Common/PageTitle";
import React from "react";





// @ts-ignore
const UsersMain = ({users}) => {
    return (
        <main>
             <Breadcrumbs breadcrumbTitle="Uzytkownicy" breadcrumbSubTitle="Forum & Community" />
            <section className="creator-area pt-130 pb-100">
                <div className="container">
                    <div className="row wow fadeInUp">
                        {users && users.items && users.items.map((user: any) => (
                            <UserSingle user={user} key={1}/>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
export default UsersMain