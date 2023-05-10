import React from "react";
import {useRouter} from "next/navigation";

interface IProps {
    id: number;
    name: string;
    active?: boolean;
    number_of_threads?: number;
}

const Category: React.FC<IProps> = ({name, id, active, number_of_threads}: IProps) => {
    const router = useRouter();
    return (
        <button className={active ? "nav-link active" : "nav-link"} id="nav-tab1" data-bs-toggle="tab"
            data-bs-target="#tab-nav1" type="button" role="tab" aria-selected="true" onClick={() => router.push(`/forum?category_id=${id}`)}>
            <span className="sidebar-nav-link">
                <i className="flaticon-home"></i>{name}
                <span className="inner-item-number">{number_of_threads ? number_of_threads : 0}</span>
            </span>
        </button>
    )
}

export default Category