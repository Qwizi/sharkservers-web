'use client'
import { ThreadOut } from "sharkservers-sdk";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Username from "../users/username";

export default function Thread({ ...props }: ThreadOut) {
    const { id, title, author, created_at, is_pinned, post_count } = props
    return (
        <Card className={is_pinned ? "border border-red-500 p-4" : "p-4"}>
            <div className="flex">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={author?.avatar} alt={`@${author?.username}`} />
                    <AvatarFallback>{author?.username}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-5">
                    <span>{author.username}</span>
                    <span className="text-slate-500">{created_at}</span>
                </div>
            </div>
            <div>
                <h4 className="text-2xl p-2 mt-2">{title}</h4>
            </div>
            <div className="p-4">
                Postów: {post_count}
            </div>
        </Card>
    )
}