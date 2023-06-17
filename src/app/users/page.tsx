import TitleSection from "@/components/Layout/TitleSection";
import UsersMain from "@/components/Users/UsersMain";
import apiClient from "@/lib/api";
const fetchUsers = async () => {
    const res = await fetch(`http://localhost/v1/users`, { next: { revalidate: 15 }});
    const users = await apiClient.users.usersGetUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
    return users
}
export default async function UsersPage() {
    const users_data = await fetchUsers();
    return (
        <>
            <UsersMain
                pages={users_data.pages}
                total={users_data.total}
                page={users_data.page}
                items={users_data.items}
            />
        </>
    )
}