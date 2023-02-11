import Breadcrumbs from "@/components/Common/PageTitle";
import ThreadDetail from "@/components/Forum/ThreadDetail";
import React from "react";

export default function ThreadDetailPage({ params }) {
    const {slug} = params
    return (
        <main>
                                    <Breadcrumbs breadcrumbTitle="Forum & Community" breadcrumbSubTitle="Forum & Community" />

            <ThreadDetail />
        </main>
    )
}