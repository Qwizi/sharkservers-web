'use client';

import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";

interface IProps {
    setMenuOpen: Function,
    menuOpen: boolean,
    user: undefined | object
}

const MobileMenu: React.FC<IProps> = ({setMenuOpen, menuOpen, user}) => {
    const [isActive14, setActive14] = useState(false);
    const handleToggle14 = () => {
        setActive14(!isActive14);
    };
    return (<>
        <div className="fix">
            <div className={menuOpen ? "side-info info-open" : "side-info"}>
                <div className="side-info-content">
                    <div className="offset-widget offset-logo mb-40">
                        <div className="col-9">
                            <Link href={"/"}>
                                <Image src={"/assets/img/logo/logo.png"} alt="logo" width={300} height={68}/>
                            </Link>
                        </div>
                        <div className="col-3 text-end">
                            <button className="side-info-close" onClick={() => setMenuOpen(false)}><i
                                className="fal fa-times"></i></button>
                        </div>
                    </div>
                    <div className="mm-menu mm-menu-1 mb-60 d-lg-none">
                        <ul>
                            {!user && (<>
                                <li><Link href={"/auth/register"}>Zarejestruj sie</Link></li>
                                <li><Link href={"/auth/login"}>Zaloguj sie</Link></li>
                            </>)}
                            <li><Link href={"/users"}>Użytkownicy</Link></li>
                        </ul>
                    </div>
                    <div className="offset-profile-action d-md-none">
                            <div className="offset-widget mb-40">
                                <div className="profile-item profile-item-header into-sidebar d-md-none">
                                    <div className={`profile-img pos-rel ${isActive14 ? "" : "show-element"}`} onClick={handleToggle14}>
                                        <div className="profile-action">
                                            <ul>
                                                <li><Link href="/creator-profile-info-personal"><i className="fal fa-user"></i>Profile</Link></li>
                                                <li><Link href="/login"><i className="fal fa-sign-out"></i>Logout</Link></li>
                                            </ul>
                                        </div>
                                        <img src="assets/img/profile/profile4.jpg" alt="profile-img" />
                                        <div className="profile-verification verified">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="offcanvas-overlay"></div>
        <div className="offcanvas-overlay-white"></div>
    </>)
}

export default MobileMenu;