import React from "react";

const Category = () => {
    return (
        <button className="nav-link active" id="nav-tab1" data-bs-toggle="tab"
                                                        data-bs-target="#tab-nav1" type="button" role="tab" aria-selected="true">
            <span className="sidebar-nav-link">
                <i className="flaticon-home"></i>General
                <span className="inner-item-number">05</span>
            </span>
        </button>
    )
}

export default Category