import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex mx-auto">
            <Loader2 className="h-4 animate-spin"/>
        </div>
        
    )
}