'use client';
import {ToastContainer} from "react-toastify";
import {usePathname} from "next/navigation";

const Footer = () => {
    const path = usePathname()
    if (path.includes("/admin")) return (<></>)
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <footer className="footer1-bg">
                <section className="footer-area footer-area1 footer-area1-bg pt-100 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                    <div className="footer-logo mb-30">
                                        <img src="/assets/img/logo/logo.png" alt="logo-img"/>
                                    </div>
                                    <p className="mb-35">We provide one-stop solutions for all IT items; your bliss is
                                        just
                                        a click
                                        away. Star Tech trusts in quality client</p>
                                    <div className="social__links footer__social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>Marketplace</h4>
                                    </div>
                                    <ul>
                                        <li>1</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                                    <div className="footer-widget-title">
                                        <h4>Explore Artworks</h4>
                                    </div>
                                    <ul>
                                        <li>2</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                                    <div className="footer-widget-title">
                                        <h4>Insight Community</h4>
                                    </div>
                                    <ul>
                                        <li>3</li>
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
                                        © Copyrighted & Designed by <a
                                        href="https://themeforest.net/user/bdevs">BDevs</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="irc-item copyright-support copyright1-support copyright-support-lines">
                                        <div className="irc-item-icon">
                                            <i className="flaticon-support"></i>
                                        </div>
                                        <div className="irc-item-content">
                                            <p>Have a question? Call us 24/7</p>
                                            <a href="tel:(987)547587587">(987) 547587587</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <form className="subscribe-form subscribe-form-copyright1">
                                        <input type="text" placeholder="Enter email"/>
                                        <button type="submit">Subscribe<i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer