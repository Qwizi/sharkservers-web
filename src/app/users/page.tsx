import Pagination from "@/components/pagination"
import { UserCard } from "@/components/users/card"
import SharkApi from "@/lib/api"
import { Page_UserOut2Schema_ } from "sharkservers-sdk"

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
    const users_data: Page_UserOut2Schema_ = await SharkApi.users.getUsers()
    console.log(users_data)
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

