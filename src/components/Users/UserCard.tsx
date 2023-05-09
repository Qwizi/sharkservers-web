import Link from "next/link";
import Image from 'next/image';
import React from "react";
import Username from "@/components/Elements/Username";

interface IProps {
    username: string;
    color: string;
}

const UserCard: React.FC<IProps> = ({...props}) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="creator-single mb-30">
                <div className="creator-wraper">
                    <div className="creator-inner">
                        <div className="creator-cover-img pos-rel">
                            <Image src="/assets/img/profile/cover1.jpg" alt="cover-img" height={600} width={360}/>
                        </div>
                        <div className="creator-content pos-rel">
                            <div className="creator-info">
                                <div className="profile-img pos-rel">
                                    <Link href="/creator-profile"><Image src={"/assets/img/profile/profile4.jpg"} alt={"User profile image"} width={160} height={160}/></Link>
                                    <div className="profile-verification verified">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <h4 className="artist-name">
                                    <Username username={props.username} color={props.color}/>
                                </h4>
                                <div className="artist-id"></div>
                            </div>
                            <div className="artist-meta-info">
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">Tematów</div>
                                    <div className="artist-created">1</div>
                                </div>
                                <div className="artist-meta-item artist-meta-item-border">
                                    <div className="artist-meta-type">Postów</div>
                                    <div className="artist-follwers">1</div>
                                </div>
                                <div className="artist-meta-item">
                                    <div className="artist-meta-type">1</div>
                                    <div className="artist-followed">1</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;