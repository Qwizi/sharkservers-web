import ForumContainer from "@/components/forum/forum-container";
import ServersTable from "@/components/servers/servers-table";
import LastOnlineUsers from "@/components/users/last-online-users";
import SharkApi, { authApi } from "@/lib/api";

export default async function Home() {
  const api = await authApi(SharkApi)
  const [
    servers,
    categories,
    threads,
    last_threads,
    last_online_users
  ] = await Promise.all([
    api.servers.getServersStatus(),
    api.forum.getCategories(),
    api.forum.getThreads(undefined, 10),
    api.forum.getThreads(undefined, 5, undefined, undefined, "-created_at"),
    api.users.getLastOnlineUsers(undefined, 100)
  ])
  return (
    <>
        <ServersTable data={...servers}/>
        <ForumContainer categories={categories} threads={threads} last_threads={last_threads}/>
        <LastOnlineUsers {...last_online_users}/>
    </>
  )
}
