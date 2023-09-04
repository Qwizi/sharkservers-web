'use client'

import { ThreadOut } from "sharkservers-sdk"
import { Card } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Username from "../users/username"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import ReactMarkdown from "react-markdown"
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function ThreadDetail({ ...props }: ThreadOut) {
    const { id, title, content, author, created_at, post_count, category } = props

    return (
        <div className="rounded-[0.5rem] border bg-background shadow">
            <div className="space-y-6 p-10 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    <Badge>{category?.name}</Badge>
                </div>
                <Separator />
            </div>
            <div className="p-10 w-full flex gap-10">
                <div className="flex flex-col items-center w-1/4  rounded-[0.5rem] border p-4 text-center h-[250px]">
                    <Avatar className="h-15 w-15  mx-auto">
                        <AvatarImage src={author?.avatar} alt={`@${author?.username}`} />
                        <AvatarFallback>{author?.username}</AvatarFallback>
                    </Avatar>
                    <div className="mt-2">
                        <Username username={author?.username} color={author?.display_role?.color} />

                    </div>
                    <div>
                        <Badge variant="outline" style={{ color: author?.display_role?.color }}>{author?.display_role?.name}</Badge>
                    </div>
                </div>
                <div className="flex flex-col rounded-[0.5rem] border p-10 w-full">
                <ReactMarkdown children={content} />,

                </div>
            </div>

        </div>
    )
}