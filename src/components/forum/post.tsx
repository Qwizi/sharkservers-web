import { PostOut } from "sharkservers-sdk";
import Username from "../users/username";
import { useState } from "react";
import MarkdownPreview from '@uiw/react-markdown-preview';
import UpdatePostForm from "./update-post-form";
import RoleBadge from "../users/role-badge";
import PostActionMenu from "./post-action-menu";
import UserAvatar from "../users/avatar";
import UserInfo from "../users/user-info";


export default function Post({ ...props }: PostOut) {
    const { id, author, content } = props
    const [editPost, setEditPost] = useState(false)

    if (!author || !content) return 

    return (
        <div id={`post-${id}`} className="rounded-[0.5rem] border bg-background shadow">
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
                            {editPost && editPost ? (
                                <UpdatePostForm content_prop={content} authorId={author.id} postId={id} setEditPost={setEditPost} />
                            ) : (
                                <MarkdownPreview source={content} />
                            )}

                        </div>
                        <PostActionMenu
                            postId={id}
                            authorId={author?.id}
                            setEditPost={setEditPost}
                            editPost={editPost}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}