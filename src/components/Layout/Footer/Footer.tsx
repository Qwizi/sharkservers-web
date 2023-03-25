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
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;