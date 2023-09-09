import ForumContainer from "@/components/forum/forum-container";
import ServersTable from "@/components/servers/servers-table";
import SharkApi from "@/lib/api";

export default async function Home() {
  const [
    servers,
    categories,
    threads,
    last_threads
  ] = await Promise.all([
    SharkApi.servers.getServersStatus(),
    SharkApi.forum.getCategories(),
    SharkApi.forum.getThreads(undefined, 10, 1),
    SharkApi.forum.getThreads(undefined, 5, undefined, undefined, "-created_at")
  ])
  return (
    <>
        <ServersTable data={...servers}/>
        <ForumContainer categories={categories} threads={threads} last_threads={last_threads}/>
    </>
  )
}
