import ThreadDetail from "@/components/Forum/ThreadDetail";
import TitleSection from "@/components/Layout/TitleSection";
import apiClient from "@/lib/api";

export const revalidate = 0

const fetchThread = async (thread_id: number) => {
    const thread = await fetch("http://localhost/v1/forum/threads/" + thread_id, {next: {revalidate: 10}})
    return await thread.json()
}

const fetchThreadPosts = async (thread_id: number) => {
    const thread_posts = await fetch("http://localhost/v1/forum/posts?thread_id=" + thread_id, {cache: "no-cache"})
    console.log(thread_posts)
    return await thread_posts.json()
}

const fetchPostLikes = async (post_id: number) => {
    const post_likes = await fetch("http://localhost/v1/forum/posts/" + post_id + "/likes", {cache: "no-cache"})
    return await post_likes.json()
}

export default async function ThreadDetailPage({
                                                   params,
                                                   searchParams,
                                               }: {
    params: { id: number };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const [thread_data, posts_data] = await Promise.all([
        apiClient.forum.forumGetThread(params.id),
        apiClient.forum.forumGetPosts(params.id, 1, 10),
    ])
    console.log(`Posts data: ${JSON.stringify(posts_data)}`)
    return (
        <>
            <section className={"about-info-area pt-130 pb-90"}>
                <div className="container">
                    <div className="row">
                        <ThreadDetail
                            thread_data={thread_data}
                            posts_data={posts_data}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}