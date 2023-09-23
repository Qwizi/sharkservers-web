import Chat from "@/components/chat/chat";
import ForumContainer from "@/components/forum/forum-container";
import WebsiteStats from "@/components/home/website-stats";
import ServersTable from "@/components/servers/servers-table";
import LastOnlineUsers from "@/components/users/last-online-users";
import SharkApi, { authApi } from "@/lib/api";

async function fetchData(api) {
  try {
    const [
      servers,
      categories,
      threads,
      posts,
      last_threads,
      users,
      last_online_users
    ] = await Promise.all([
      api.servers.getServersStatus(),
      api.forum.getCategories(),
      api.forum.getThreads(undefined, 10),
      api.forum.getPosts(undefined, undefined, 1),
      api.forum.getThreads(undefined, 5, undefined, undefined, "-created_at"),
      api.users.getUsers(undefined, 1),
      api.users.getLastOnlineUsers(undefined, 100)
    ])
    return {
      servers: servers,
      categories: categories,
      threads: threads,
      posts: posts,
      last_threads: last_threads,
      users: users,
      last_online_users
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

export default async function Home() {
  const api = await authApi(SharkApi)
  const [
    serversResult,
    categoriesResult,
    threadsResult,
    postsResult,
    last_threadsResult,
    usersResult,
    last_online_usersResult
  ] = await Promise.allSettled([
    api.servers.getServersStatus(),
    api.forum.getCategories(),
    api.forum.getThreads(undefined, 10),
    api.forum.getPosts(undefined, undefined, 1),
    api.forum.getThreads(undefined, 5, undefined, undefined, "-created_at"),
    api.users.getUsers(undefined, 1),
    api.users.getLastOnlineUsers(undefined, 100)
  ])
  if (
    serversResult.status == "rejected" ||
    categoriesResult.status == "rejected" ||
    threadsResult.status == "rejected" ||
    postsResult.status == "rejected" ||
    last_threadsResult.status == "rejected" ||
    usersResult.status == "rejected" ||
    last_online_usersResult.status == "rejected"
  ) {
    throw new Error("Wystapil problem")
  }

  if (
    !serversResult?.value ||
    !categoriesResult?.value ||
    !threadsResult?.value ||
    !postsResult?.value ||
    !last_threadsResult?.value ||
    !usersResult?.value ||
    !last_online_usersResult?.value
  ) return

  return (
    <>
      <ServersTable data={...serversResult.value} />
      <Chat />
      <ForumContainer categories={categoriesResult.value} threads={threadsResult.value} last_threads={last_threadsResult.value} />
      <LastOnlineUsers {...last_online_usersResult.value} />
      <WebsiteStats users_total={usersResult.value.total} threads_total={threadsResult.value.total} posts_total={postsResult.value.total} last_user={usersResult.value.items[0]} />
    </>
  )
}
