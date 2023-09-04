import ForumContainer from "@/components/forum/forum-container";
import ServersTable from "@/components/servers/servers-table";
import SharkApi from "@/lib/api";

export default async function Home() {
  const [
    servers,
    categories,
    threads
  ] = await Promise.all([
    SharkApi.servers.getServersStatus(),
    SharkApi.forum.getCategories(),
    SharkApi.forum.getThreads(undefined, 10 )
  ])
  return (
    <>
        <ServersTable data={...servers}/>
        <ForumContainer categories={categories} threads={threads}/>
    </>
  )
}
