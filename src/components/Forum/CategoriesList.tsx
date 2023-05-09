'use client';
import Category from "@/components/Forum/Category";
import React from "react";
import {usePathname, useSearchParams} from "next/navigation";
import {useParams} from "react-router";

interface IProps {
    items: [
        {
            id: number;
            name: string;
            description: string;
            type: string;
            created_at: string;
            updated_at: string;
        }
    ],
    total: number;
    page: number;
    size: number;
}

const CategoriesList: React.FC<IProps> = ({items, size, page, total}: IProps) => {
    const searchParams = useSearchParams();
    let categoryId = Number(searchParams.get("category_id"));
    if (!categoryId) categoryId = 1
    return (
        <div className="row">
            <div className="col-lg-12 col-md-6">
                <div className="sidebar-tab-nav sidebar-widget-single mb-30 wow fadeInUp">
                    <h4 className="sidebar-widget-title">Kategorie</h4>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            {items && items.map((item) => (
                                <Category key={item.id} name={item.name} id={item.id} active={categoryId == item.id}/>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default CategoriesList