
import Login from "@/components/Login/Login";
import UsersMain from "@/components/Users/UsersMain";

interface UsersListProps {
    items: [any],
    total: number,
    page: number,
    sie: number,

}
async function fetchUsers() {
    const response = await fetch('http://localhost/v1/users')
    return await response.json()
}

export default async function UsersPage() {
    const users:UsersListProps  = await fetchUsers()
    return (
      <main>
        <UsersMain users={users}/>
      </main>
    )
  }