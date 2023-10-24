import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sharkApi } from "@/lib/server-api"

export const dynamic = 'force-dynamic'


export default async function Home() {
  const api = await sharkApi()
  const users = await api.users.getUsers()
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Liczba użytkowników
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.total}</div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
