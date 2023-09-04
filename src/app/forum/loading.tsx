import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col space-x-4">
            <div className="space-y-5 mt-10">
                <Skeleton className="h-[100px]" />
            </div>
            <div className="flex mt-20 space-x-4">
                <Skeleton className="h-[1000px] w-8/12" />
                <Skeleton className="min-h-full w-4/12" />
            </div>

        </div>
    )
}