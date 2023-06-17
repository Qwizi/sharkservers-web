import {ApiClient} from "@/client";

const apiClient = new ApiClient({
    BASE: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:80",
});

export default apiClient;