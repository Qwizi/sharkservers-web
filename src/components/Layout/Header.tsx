'use client';
import React, {Suspense, useEffect, useState} from "react";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {signin} from "next-auth/core/routes";
import {usePathname, useRouter} from 'next/navigation';
import Image from "next/image";
import useSticky from "@/hooks/useSticky";


const Header: React.FC = () => {
    const {data: session} = useSession();
    console.log(session);
    const [isActive11, setActive11] = useState(false);
    const handleToggle11 = () => {
        setActive11(!isActive11);
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const pathName = usePathname();
    const [path, setPath] = useState("");
    const { sticky } = useSticky();

    useEffect(() => {
        setPath(pathName);
    }, [pathName]);


    return (
        <>
            <header className="header1">
                <div id="header-sticky" className={sticky ? "sticky header-main header-main1" : "header-main header-main1"}>
                    <div className="container header-container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-4">
                                <div className="header-main-left">
                                    <div className="header-logo header1-logo">
                                        <Link href="/" className="logo-bb">
                                            <img src={"/assets/img/logo/logo3.png"} alt={"SharkServers.pl logo"}/>
                                        </Link>
                                        <Link href="/" className="logo-bw">
                                            <img src={"/assets/img/logo/logo3.png"}
                                                 alt={"SharkServers.pl logo"}/>
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
                                    <Suspense fallback={<div>Loading...</div>}>
                                        {session?.user ? (
                                            <div
                                                className="profile-item profile-item-header ml-20 d-none d-md-inline-block pos-rel">
                                                <div
                                                    className={`profile-img pos-rel ${isActive11 ? "show-element" : ""}`}
                                                    onClick={handleToggle11}>
                                                    <div className="profile-action">
                                                        <ul>
                                                            <li><Link href={"/settings"}>Ustawiena</Link></li>
                                                            <li onClick={() => signOut()}>Wyloguj sie</li>
                                                        </ul>
                                                    </div>
                                                    <img src="/assets/img/profile/profile4.jpg" alt="profile-img"/>
                                                    <div className="profile-verification verified">
                                                        <i className="fas fa-check"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="header-btn ml-10 d-none d-xxl-inline-block">
                                                    <button className={"fill-btn"} onClick={() => router.push(`/auth/login?callbackUrl=${pathName}`)}>Zaloguj
                                                        sie
                                                    </button>
                                                </div>
                                                <div className="header-btn ml-10 d-none d-xxl-inline-block">
                                                    <Link href="/auth/register" className={"fill-btn"}>Zarejestruj
                                                        sie</Link>
                                                </div>
                                            </>
                                        )}
                                    </Suspense>
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
        </>
    );
}

export default Header;