import ThreadDetail from "@/components/Forum/ThreadDetail";
import TitleSection from "@/components/Layout/TitleSection";

const fetchThread = async (thread_id: number) =>{
    const thread = await fetch("http://localhost/v1/forum/threads/" + thread_id, { next: { revalidate: 10 }})
    return await thread.json()
}

const fetchThreadPosts = async (thread_id: number) =>{
    const thread_posts = await fetch("http://localhost/v1/forum/posts?thread_id=" + thread_id, { next: { revalidate: 0 }})
    console.log(thread_posts)
    return await thread_posts.json()
}

export default async function ThreadDetailPage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
    const thread_data = await fetchThread(params.id)
    const posts_data = await fetchThreadPosts(params.id)
    console.log(posts_data)
    return (
        <>
            <TitleSection title={`Temat - ${thread_data.title}`} />
            <section className={"about-info-area pt-130 pb-90"}>
                <div className="container">
                    <div className="row">
                        <ThreadDetail
                            id={thread_data.id}
                            title={thread_data.title}
                            content={thread_data.content}
                            author={thread_data.author}
                            category={thread_data.category}
                            is_closed={thread_data.is_closed}
                            created_at={thread_data.created_at}
                            updated_at={thread_data.updated_at}
                            posts_data={posts_data}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}