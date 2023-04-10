import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer1-bg">
            <section className="footer-area footer-area1 footer-area1-bg pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                <div className="footer-logo mb-30">
                                    <Link href="/"><img src="assets/img/logo/logo3.png" alt="logo-img" /></Link>
                                </div>
                                <p className="mb-35">W SharkServers.pl dokładamy wszelkich starań, aby zapewnić naszej społeczności najlepsze serwery i możliwie najprzyjemniejsze wrażenia z gry. Nasz zespół składa się z doświadczonych graczy i administratorów serwerów, którzy są pasjonatami Team Fortress 2 i oddani dostarczaniu usług na najwyższym poziomie.</p>
                                <div className="social__links footer__social">
                                    <ul>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                <div className="footer-widget-title">
                                    <h4>Coming Soon</h4>
                                </div>
                                 <ul>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>Coming Soon</h4>
                                </div>
                                  <ul>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>Coming Soon</h4>
                                </div>
                                <ul>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                    <li><Link href="/">Coming Soon</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright-area copyright1-area">
                <div className="container">
                    <div className="copyright1-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="copyright-text copyright1-text">
                                    © Styl stworzony przez BDevs, zakodowany przez Qwizi
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="irc-item copyright-support copyright1-support copyright-support-lines">
                                    <div className="irc-item-icon">
                                        <i className="flaticon-support"></i>
                                    </div>
                                    <div className="irc-item-content">
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <form className="subscribe-form subscribe-form-copyright1">
                                    <input type="text" placeholder="Enter email" />
                                    <button type="submit">Subscribe<i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;