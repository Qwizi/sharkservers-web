import ForumContainer from "@/components/forum/forum-container";
import ForumFilters from "@/components/forum/forum-filters";
import Pagination from "@/components/pagination";
import SharkApi, { authApi } from "@/lib/api";


export const dynamic = 'force-dynamic'

export default async function ForumPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const api = await authApi(SharkApi)
    const page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const category = searchParams["category"] ? Number(searchParams["category"]) : 1
    const server = searchParams["server"] ? Number(searchParams["server"]) : undefined
    const order_by = searchParams["order_by"] ? String(searchParams["order_by"]) : "-created_at"
    const status = searchParams["status"] ? searchParams["status"] : undefined
    const closed = searchParams["closed"] ? searchParams["closed"] : false

    const [
        categories,
        threads,
        last_threads,
        servers
    ] = await Promise.all([
        //@ts-ignore
        api.forum.getCategories(),
        api.forum.getThreads(page, 10, category, server, order_by, status, closed),
        api.forum.getThreads(undefined, 5, undefined, undefined, "-created_at"),
        api.servers.getServers()
    ])

    return (
        <>
            <ForumFilters categories={categories} servers={servers}/>
            <ForumContainer categories={categories} threads={threads} last_threads={last_threads}/>
            <Pagination total={threads.total} />
        </>
        
    )
}