import ForumContainer from "@/components/forum/ForumContainer";
import ServersTable from "@/components/servers/servers-table";
import SharkApi from "@/lib/api";

export default async function Home() {
  const servers_data = await SharkApi.servers.getServersStatus()
  console.log(servers_data)
  return (
    <>
        <ServersTable data={...servers_data}/>
        <ForumContainer />
    </>
  )
}
