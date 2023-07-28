import TitleSection from "@/components/Layout/TitleSection";
import UsersMain from "@/components/Users/UsersMain";
import {SharkServersClient as shark_api} from "sharkservers-sdk";

const fetchUsers = async () => {
    return
}
export default async function UsersPage() {
    const users_data = await shark_api.users.getUsers(undefined, 10);
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