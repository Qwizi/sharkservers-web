import ThreadDetail from "@/components/Forum/ThreadDetail";
import {SharkServersClient as shark_api} from "sharkservers-sdk";

export const revalidate = 0

export default async function ThreadDetailPage({
                                                   params,
                                                   searchParams,
                                               }: {
    params: { id: number };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const [thread_data, posts_data] = await Promise.all([
        shark_api.forum.getThread(params.id),
        shark_api.forum.getPosts(params.id, 1, 10),
    ])
    return (
        <>
            <section className={"about-info-area pt-130 pb-90"}>
                <div className="container">
                    <div className="row">
                        <ThreadDetail
                            thread_data={thread_data}
                            posts_data={posts_data}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}