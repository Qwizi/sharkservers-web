'use client'
import { Page_PostOut_,ThreadOut } from "sharkservers-sdk"
import Username from "../users/username"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import Post from "./post"
import Pagination from "../pagination";
import dynamic from "next/dynamic"
const MarkdownEditor = dynamic(
    () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
    { ssr: false }
);
import MarkdownPreview from '@uiw/react-markdown-preview';
import RoleBadge from "../users/role-badge"
import ThreadDetailActionMenu from "./thread-detail-action-menu"
import ThreadDetailCreatePost from "./thread-detail-create-post"
import UserAvatar from "../users/avatar"
import UserInfo from "../users/user-info"
import ThreadBadges from "./thread-badges"



interface IThreadDetail {
    thread: ThreadOut,
    posts: Page_PostOut_
}


export default function ThreadDetail({ thread, posts }: IThreadDetail) {
    const { id, title, content, author, created_at, post_count, category, is_closed, is_pinned } = thread

    return (
        <div className="rounded-[0.5rem] border bg-background shadow">
            <div className="space-y-6 p-10 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    <ThreadBadges categoryName={category?.name} is_closed={is_closed} is_pinned={is_pinned} />
                </div>
                <Separator />
            </div>
            <div className="p-10 w-full flex gap-10">
                <div className="flex flex-col items-center w-1/4  rounded-[0.5rem] border p-4 text-center h-[250px]">
                    <UserInfo
                        user={...author}       
                        avatarClassName="h-15 w-15  mx-auto" 
                    />
                </div>
                <div className="flex flex-col rounded-[0.5rem] border p-10 w-full">
                    <div className="ml-auto flex w-full justify-between">
                        <div className="w-full">
                            <MarkdownPreview source={content} />
                        </div>
                        <ThreadDetailActionMenu threadId={id} />
                    </div>
                </div>
            </div>

            {posts && posts.items.map((post, i) =>
                <Post key={i} {...post} />
            )}

            {!is_closed && <ThreadDetailCreatePost {...thread} />}
            <Pagination total={posts.total} />
        </div>
    )
}