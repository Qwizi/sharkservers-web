import { PostOut } from "sharkservers-sdk";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ReactMarkdown from "react-markdown";
import Username from "../users/username";
import { Badge } from "../ui/badge";

export default function Post({...props}: PostOut) {
    const {id, author, content} = props
    return (
        <div id={`post-${id}`} className="rounded-[0.5rem] border bg-background shadow">
            <div className="p-10 w-full flex gap-10">
                <div className="flex flex-col items-center w-1/4  rounded-[0.5rem] border p-4 text-center h-[250px]">
                    <Avatar className="h-15 w-15  mx-auto">
                        <AvatarImage src={author?.avatar} alt={`@${author?.username}`} />
                        <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <div className="mt-2">
                        <Username id={author?.id} username={author?.username} color={author?.display_role?.color} />

                    </div>
                    <div>
                        <Badge variant="outline" style={{ color: author?.display_role?.color }}>{author?.display_role?.name}</Badge>
                    </div>
                </div>
                <div className="flex flex-col rounded-[0.5rem] border p-10 w-full">
                <ReactMarkdown children={content} />
                </div>
            </div>
        </div>
    )
}