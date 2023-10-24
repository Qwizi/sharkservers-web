import { columns } from "@/components/players/columns";
import { DataTable } from "@/components/data-table";
import { sharkApi } from "@/lib/server-api";

export default async function PlayersPage() {
    const api = await sharkApi()
    const data = await api.players.getPlayers()
    return (
        <>
        <DataTable columns={columns} data={data.items} />
        </>
    )
}