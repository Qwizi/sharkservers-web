'use client';
import {default as BR} from "@marketsystems/nextjs13-appdir-breadcrumbs";
import {usePathname} from "next/navigation";

const Breadcrumbs = () => {
    const getPathFromUrl = (url: string): string => {
      return url.split(/[?#]/)[0];
    };
    const pathname = usePathname()
    const path = getPathFromUrl(pathname)

    return (
        <section className="page-title-area">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="page-title">
                            <h2 className="breadcrumb-title mb-10">{path}</h2>
                            <div className="breadcrumb-menu">
                                <BR
                                    omitRootLabel
                                    containerClassName={"breadcrumb-trail breadcrumbs"}
                                    listClassName={"trail-items"}
                                    inactiveItemClassName={"trail-item trail-begin"}
                                    activeItemStyle={{display: "inline-block"}}
                                    omitIndexList={[0]}
                                    labelsToUppercase={true}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Breadcrumbs