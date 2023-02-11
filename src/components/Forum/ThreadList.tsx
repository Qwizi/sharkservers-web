import React from "react";
import Thread from "./Thread";

const ThreadList = () => {
    return (
       <div className="col-lg-8 order-2 order-lg-1">
            <div className="forum-tab-contents mb-0 wow fadeInUp">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade active show" id="tab-nav1" role="tabpanel" aria-labelledby="nav-tab1">
                        <div className="forum-post-wrapper mb-30"> 
                        <Thread /> 
                        <Thread />            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadList;