'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//import useSticky from '../../../hooks/useSticky';
import { useRouter } from 'next/router';
import useSticky from '@/hooks/useSticky';
//import MobileMenu from './MobileMenu';

const Header = ({  }) => {
    const [isActive11, setActive11] = useState(false);

    const handleToggle11 = () => {
       setActive11(!isActive11);
    };
 
    const { sticky } = useSticky();
 
    const [menuOpen, setMenuOpen] = useState(false)
 
   return (
      <>
         <header className={`header1`}>
            <div id="header-sticky" className={sticky ? "sticky header-main header-main1" : "header-main header-main1"}>
               <div className="container header-container">
                  <div className="row align-items-center">
                     <div className="col-xl-2 col-lg-2 col-md-4 col-4">
                        <div className="header-main-left">
                           <div className="header-logo header1-logo">
                              <Link href="/"><img src="/assets/img/logo/logo3.png" alt="logo-img"/></Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-10 col-lg-10 col-md-8 col-8">
                        <div className="header-main-right">
                           <div className="main-menu main-menu1 d-none d-lg-block">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li className="active"><Link href="/">Strona główna</Link></li>
                                 </ul>
                              </nav>
                           </div>

                           <div className="menu-bar d-xl-none ml-20">
                              <a className="side-toggle" href="#!">
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
};

export default Header;