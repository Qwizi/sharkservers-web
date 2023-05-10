import TitleSection from "@/components/Layout/TitleSection";
import UsersMain from "@/components/Users/UsersMain";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

const fetchUsers = async () => {
    const res = await fetch(`http://localhost/v1/users`, { next: { revalidate: 15 }});
    return await res.json();
}
export default async function UsersPage() {
    const users_data = await fetchUsers();
    return (
        <>
            <TitleSection title={"Uzytkownicy"} />
            <UsersMain users_data={users_data}/>
        </>
    )
}