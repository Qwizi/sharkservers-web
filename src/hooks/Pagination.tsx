import {useSearchParams} from "next/navigation";
import React from "react";

interface IProps {
    total: number;
    size: number | undefined;
}

const usePagination: ({total}: IProps) => {
    total: number;
    pages: number;
    limit: string | number;
    current_page: string | number
} = ({total, size}: IProps) => {
    const searchParams = useSearchParams();
    const current_page = searchParams.get("page") ?? 1
    const limit = size ?? 10
    const pages = Math.ceil(total / Number(limit))
    return {
        current_page: current_page,
        total: total,
        limit: limit,
        pages: pages,
    }
}

export default usePagination;