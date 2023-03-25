'use client'

import Link from "next/link"

// @ts-ignore
const UserSingle = ({ user }) => {
    return (

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="creator-single mb-30">
                <div className="creator-wraper">
                    <div className="creator-inner">
                        <div className="creator-cover-img pos-rel">
                            <img alt="cover-img" src="/assets/img/profile/profile-cover/profile-cover1.jpg"/>
                        </div>
                        <div className="creator-content pos-rel">
                            <div className="creator-info">
                                <div className="profile-img pos-rel">
                                    <Link href="/creator-profile"><img src="/assets/img/profile/profile1.jpg" alt="cover-img" /></Link>
                                    <div className="profile-verification verified">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <h4 className="artist-name">{user.username}</h4>
                                <div className="artist-id">1</div>
                            </div>
                            <div className="artist-meta-info">
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">3</div>
                                </div>
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">5</div>
                                    <div className="artist-follwers">10</div>
                                </div>
                                <div className="artist-meta-item">
                                    <div className="artist-meta-type">23</div>
                                    <div className="artist-followed">ds</div>
                                </div>
                            </div>
                            <div className="artist-follow-btn">
                                <button className="follow-artist">123</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSingle