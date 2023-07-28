'use client';
import React from "react";
import {usePathname, useSearchParams} from "next/navigation";
import usePagination from "@/hooks/Pagination";
import Link from "next/link";

interface IProps {
    total: number;
    size: number | undefined;
}

const Pagination: React.FC<IProps> = ({...props}) => {
    const {total, pages, current_page, limit} = usePagination({total: props.total, size: props.size})
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let url = pathname + "/?" + searchParams.toString();
    url = url.replace(/&?page=\d+/g, "")
    console.log(current_page)
    return (
        <div className="basic-pagination mt-20 mb-30">
            <ul>
                {current_page && (Number(current_page) >= pages) && Number(current_page) > 1 && (
                    <li>
                        <Link className="next page-numbers" href={url + `&page=${Number(current_page) - 1}`}>
                            <i className="fal fa-angle-left"></i>
                        </Link>
                    </li>
                )}
                {[...Array(pages)].map((e, i) => <li key={i}>
                    <Link href={url + `&page=${i + 1}`}>
                        <span aria-current="page" className={current_page == (i + 1) ? "page-numbers current": "page-numbers"}>{i + 1}</span>
                    </Link>

                </li>)}
                {current_page && (Number(current_page) < pages) && (<li>
                    <Link className="next page-numbers" href={url + `&page=${Number(current_page) + 1}`}>
                        <i className="fal fa-angle-right"></i>
                    </Link>
                </li>)}

            </ul>
        </div>
    )
}

export default Pagination;