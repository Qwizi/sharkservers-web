import CreateThread from "@/components/forum/create-thread";
import SharkApi, { authApi } from "@/lib/api";
import { sharkApi } from "@/lib/server-api";

export default async function CreateThreadPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const api = await sharkApi();
  const categories = await api.forum.getCategories(undefined, 100, "id");
  const category = searchParams["category"]
    ? searchParams["category"]
    : undefined;

  return <CreateThread categories={categories} category={category} />;
}
