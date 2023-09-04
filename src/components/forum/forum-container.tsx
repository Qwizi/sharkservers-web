'use client'
import { Button } from "../ui/button";
import CategoriesSidebar from "./categories-sidebar";
import { Page_CategoryOut_, Page_ThreadOut_ } from "sharkservers-sdk";
import Thread from "./thread";
import { useRouter } from "next/navigation";
import LastThreadSidebar from "./last-threads-sidebar";

interface IForumContainer {
    categories: Page_CategoryOut_,
    threads: Page_ThreadOut_,
    last_threads: Page_ThreadOut_
}

const ForumContainer = ({categories, threads, last_threads}: IForumContainer) => {
    const router = useRouter()
    return (
        <div className="lg:flex lg:flex-row flex flex-col w-full h-full mt-5 gap-4">
            <div className="w-full md:w-8/12 order-2 sm:order-1 grid gird-cols-1 gap-4">
                {threads && threads.items.map((thread, i) => 
                    <Thread key={i} {...thread} />
                )}
            </div>
            <div className="sm:w-4/12 w-full order-1 sm:order-1">
                <Button className="w-full" onClick={(e) => router.push("/forum/create")}>Napisz temat</Button>
                <CategoriesSidebar {...categories}/>
                <LastThreadSidebar {...last_threads}/>
            </div>
        </div>
    )
}

export default ForumContainer