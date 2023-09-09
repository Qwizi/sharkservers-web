import Pagination from "@/components/pagination"
import { UserCard } from "@/components/users/card"
import SharkApi, { authApi } from "@/lib/api"
import { Page_UserOut_ } from "sharkservers-sdk"
import {notFound} from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function UsersPage({
    searchParams,
}: {
searchParams: { [key: string]: string | string[] | undefined };
}) {
    const api = await authApi(SharkApi)
    let page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const users_data: Page_UserOut_ = await api.users.getUsers(page, 12)
    console.log(api)
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {users_data.items.map((user, i) =>
                 <UserCard key={i} {...user} />
            )}
            </div>
            <Pagination total={users_data.total}/>
        </section>
    )
}

