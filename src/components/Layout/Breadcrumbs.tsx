'use client';
import {default as BR} from "@marketsystems/nextjs13-appdir-breadcrumbs";
import {usePathname} from "next/navigation";

const getLabelFromPath = (path: string): string => {
    const pathArray = path.split("/")
    const secondLast = pathArray[pathArray.length - 2]
    const secondLastFormat = secondLast.charAt(0).toUpperCase()  + secondLast.slice(1)
    const label = pathArray[pathArray.length - 1]
    const labelFormat = label.charAt(0).toUpperCase() + label.slice(1)

    return secondLast ? `${secondLastFormat} - ${labelFormat}` : labelFormat
}

const Breadcrumbs = () => {
    const pathname = usePathname()
    const label = getLabelFromPath(pathname)


    return (
        <section className="page-title-area">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="page-title">
                            <h2 className="breadcrumb-title mb-10">{label}</h2>
                            <div className="breadcrumb-menu">
                                <BR
                                    containerClassName={"breadcrumb-trail breadcrumbs"}
                                    listClassName={"trail-items"}
                                    listStyle={{"margin": "0px", "padding": "0px"}}
                                    inactiveItemClassName={"trail-item trail-begin"}
                                    activeItemStyle={{display: "inline-block"}}
                                    omitIndexList={[0]}
                                    labelsToUppercase={true}
                                    transformLabel={label => label}
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