import { ThreadOut } from "sharkservers-sdk";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { title } from "@uiw/react-md-editor";
import slugify from "slugify";
import Username from "../users/username";
import Link from "next/link";

export default function LastThread({ ...props }: ThreadOut) {
    const { id, title, created_at, author } = props;
    return (
        <Card className={"p-4"}>
            <div className="flex mx-auto items-center">
                <div>
                    <Avatar className="h-8 w-8 ">
                        <AvatarImage src={author?.avatar} alt={`@${author?.username}`} />
                        <AvatarFallback>{author?.username}</AvatarFallback>
                    </Avatar>
                    <span><Username key={id} username={author?.username} color={author?.display_role?.color}/> </span>
                </div>

                <div className="mx-auto">
                    <h4 className="text-xl"><Link href={`/forum/${slugify(title)}-${id}`}>{title}</Link></h4>
                </div>
                
            </div>

        </Card>
    )
}