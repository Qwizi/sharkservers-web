// @ts-ignore
import ThreadComponent from "@/components/forum/Thread.component";
import {HomeIcon} from '@heroicons/react/24/outline'
import { Button } from "../ui/button";
import CategoriesSidebar from "./categories-sidebar";
import { Page_CategoryOut_, Page_ThreadOut_ } from "sharkservers-sdk";
import Thread from "./thread";

interface IForumContainer {
    categories: Page_CategoryOut_,
    threads: Page_ThreadOut_
}

const ForumContainer = ({categories, threads}: IForumContainer) => {
    return (
        <div className="lg:flex lg:flex-row flex flex-col w-full h-full mt-32 gap-4">
            <div className="w-8/12 order-2 sm:order-1 grid gird-cols-1 gap-4">
                {threads && threads.items.map((thread, i) => 
                    <Thread key={i} {...thread} />
                )}
            </div>
            <div className="sm:w-4/12 w-full order-1 sm:order-1">
                <Button className="w-full">Napisz temat</Button>
                <CategoriesSidebar {...categories}/>
            </div>
        </div>
    )
}

export default ForumContainer