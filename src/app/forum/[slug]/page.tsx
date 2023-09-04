import ThreadDetail from "@/components/forum/thread-detail";
import SharkApi from "@/lib/api";

export const dynamic = 'force-dynamic'


export default async function ThreadDetailPage({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    let slugSplit = params.slug.split("-")
    let threadId = Number(slugSplit[slugSplit.length - 1]);
    const page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const [
        thread,
        posts
    ] = await Promise.all([
        SharkApi.forum.getThread(threadId),
        SharkApi.forum.getPosts(threadId, page, 10)
    ])
    return <ThreadDetail thread={...thread} posts={posts}/>
}