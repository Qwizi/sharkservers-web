import React from "react";

const SearchBox = () => {
    return (
        <div className="row wow fadeInUp">
                        <div className="col-lg-12">
                            <div className="forum-search-bar">
                                <div className="filter-by-search mb-30">
                                    <div className="common-select-arrow common-select-arrow-60">
                                        <select className="question-category-select">
                                            <option value="1">General</option>
                                            <option value="2">Account</option>
                                            <option value="3">Upload Artwork</option>
                                            <option value="4">Wallet</option>
                                            <option value="5">Transaction</option>
                                            <option value="6">Purchase & Sale</option>
                                            <option value="7">Contact & Support</option>
                                        </select>
                                    </div>
                                    <form action="#" className="filter-search-input">
                                        <input type="text" placeholder="Search keyword" />
                                        <button><i className="fal fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default SearchBox;