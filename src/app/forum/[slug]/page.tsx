import ThreadDetail from "@/components/forum/thread-detail";
import SharkApi from "@/lib/api";

export default async function ThreadDetailPage({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    let slugSplit = params.slug.split("-")
    let threadId = Number(slugSplit[slugSplit.length - 1]);
    const [
        thread
    ] = await Promise.all([
        SharkApi.forum.getThread(threadId)
    ])
    return <ThreadDetail {...thread}/>
}