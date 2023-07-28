import UserProfile from "@/components/Profile/UserProfile";
import {SharkServersClient as api_client} from "sharkservers-sdk";

export default async function UserProfilePage({
                                                  params, searchParams,
                                              }: {
    params: { id: number }; searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page = searchParams["page"] ? Number(searchParams["page"]) : 1
    const user_data_promise = api_client.users.getUser(params.id);
    const user_posts_promise = api_client.users.getUserPosts(params.id, page, 5);
    const user_threads_promise = api_client.users.getUserThreads(params.id, page, 5);
    const [user_data, user_post_data, user_threads_data] = await Promise.all([user_data_promise, user_posts_promise, user_threads_promise]);
    return <UserProfile user_data={user_data} posts_data={user_post_data} threads_data={user_threads_data}/>
}