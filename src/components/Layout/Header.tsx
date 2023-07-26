'use client';
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {usePathname, useRouter} from 'next/navigation';
import Image from "next/image";
import useSticky from "@/hooks/useSticky";
import MobileMenu from "@/components/Layout/MobileMenu";
import Username from "@/components/Elements/Username";


const Header: React.FC = () => {
    const {data: session} = useSession();
    const [isActive11, setActive11] = useState(false);
    const handleToggle11 = () => {
        setActive11(!isActive11);
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const pathName = usePathname();
    const [path, setPath] = useState("");
    const {sticky} = useSticky();

    useEffect(() => {
        setPath(pathName);
    }, [pathName]);


    const loggedMenu = (
        <div
            className="profile-item profile-item-header ml-20 d-none d-md-inline-block pos-rel">
            <div
                className={`profile-img pos-rel ${isActive11 ? "show-element" : ""}`}
                onClick={handleToggle11}>
                <div className="profile-action">
                    <ul>
                        <li><i className="fal fa-user"></i> <Username color={session?.user.display_role.color} username={session?.user.username}/></li>
                        <li><Link href={"/account"}><i className="fal fa-user"></i> Konto</Link></li>
                        <li onClick={() => signOut()}><i className="fal fa-sign-out"></i> Wyloguj sie</li>
                    </ul>
                </div>
                <img src={`http://localhost${session?.user.avatar}`} alt="profile-img"/>
            </div>
        </div>
    )

    const notLoggedMenu = (
        <>
            <div className="header-btn ml-10 d-none d-xxl-inline-block">
                <button className={"fill-btn"}
                        onClick={() => router.push(`/auth/login?callbackUrl=${pathName}`)}>Zaloguj
                    sie
                </button>
            </div>
            <div className="header-btn ml-10 d-none d-xxl-inline-block">
                <Link href="/auth/register" className={"fill-btn"}>Zarejestruj
                    sie</Link>
            </div>
        </>
    )

    return (
        <>
            <header className="header1 oc-transparent-header">
                <div id="header-sticky"
                     className={sticky ? "sticky header-main header-main1" : "header-main header-main1"}>
                    <div className="container header-container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-4">
                                <div className="header-main-left">
                                    <div className="header-logo header1-logo">
                                        <Link href="/" className="logo-bb">
                                            <Image src={"/assets/img/logo/logo.png"} alt={"SharkServers.pl logo"}
                                                   width={300} height={68}/>
                                        </Link>
                                        <Link href="/" className="logo-bw">
                                            <Image src={"/assets/img/logo/logo.png"} alt={"SharkServers.pl logo"}
                                                   width={300} height={68}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-8 col-8">
                                <div className="header-main-right">
                                    <div className="main-menu main-menu1 d-none d-lg-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <Link href={"/forum"}>Forum</Link>
                                                </li>
                                                <li>
                                                    <Link href={"/users"}>Użytkownicy</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <form action="#"
                                          className="filter-search-input header-search d-none d-xl-inline-block">
                                        <input type="text" placeholder="Search keyword"/>
                                        <button><i className="fal fa-search"></i></button>
                                    </form>
                                    {session?.user ? loggedMenu : notLoggedMenu}
                                    <div className="menu-bar d-xl-none ml-20">
                                        <a className="side-toggle" href="#" onClick={() => {
                                            setMenuOpen(!menuOpen)
                                        }}>
                                            <div className="bar-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={session?.user}/>

            <div onClick={() => setMenuOpen(false)}
                 className={menuOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>

        </>
    );
}

export default Header;