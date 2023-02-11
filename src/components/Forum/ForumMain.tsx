import React from 'react';
import Link from 'next/link';
import Pagination from '../Common/Pagination';
import ThemeChanger from '../Common/ThemeChanger';
import SearchBox from './SearchBox';
import CategoryList from './CategoryList';
import ThreadList from './ThreadList';
import Breadcrumbs from '../Common/PageTitle';

const ForumMain = () => {
    return (
        <main>
            <Breadcrumbs breadcrumbTitle="Forum & Community" breadcrumbSubTitle="Forum & Community" />

            <section className="page-title-area">
                <div className="art-ranking-area">
                    <div className="container">
                    <div className="page-title"><h4>Serwery</h4></div>
                        <div className="rank-list-container wow fadeInUp">
                            <div className="rank-list-wrapper mb-30">
                                
                                <div className="rank-list-items">
                                    <div className="rank-list-row">
                                        <div className="rank-list-cell rank-list-cell-sl"><span></span></div>
                                        <div className="rank-list-cell rank-list-cell-artwotrks">
                                            Jailbreak
                                        </div>
                                        <div className="rank-list-cell rank-list-cell-market">127.0.0.1:5432</div>
                                        <div className="rank-list-cell rank-list-cell-volume">32/32</div>
                                        <div className="rank-list-cell rank-list-cell-hours">ctf_2fort</div>
                                        <div className="rank-list-cell rank-list-cell-days"><Link href="" className="fill-btn">Statystyki</Link></div>
                                        <div className="rank-list-cell rank-list-cell-bids"><Link href="" className="fill-btn">Dolacz</Link></div>
                                        <div className="rank-list-cell rank-list-cell-price"></div>
                                    </div>
                                    <div className="rank-list-row">
                                        <div className="rank-list-cell rank-list-cell-sl"><span></span></div>
                                        <div className="rank-list-cell rank-list-cell-artwotrks">
                                            DeathRun
                                        </div>
                                        <div className="rank-list-cell rank-list-cell-market">127.0.0.1:5432</div>
                                        <div className="rank-list-cell rank-list-cell-volume">32/32</div>
                                        <div className="rank-list-cell rank-list-cell-hours">ctf_2fort</div>
                                        <div className="rank-list-cell rank-list-cell-days"><Link href="" className="fill-btn">Statystyki</Link></div>
                                        <div className="rank-list-cell rank-list-cell-bids"><Link href="" className="fill-btn">Dołącz</Link></div>
                                        <div className="rank-list-cell rank-list-cell-price"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-info-area pt-130 pb-90" >
                <div className="container">
                    <SearchBox />
                    <div className="row">
                        <ThreadList />
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="page-sidebar">
                                <div className="crate-question-wrapper mb-30">
                                    <a className="create-question-btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Create Your Question</a>
                                    <div className="collapse mt-30" id="collapseExample">
                                        <div className="card card-body">
                                            <form className="contact-form" action="#">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="single-input-unit">
                                                            <label htmlFor="name">Name</label>
                                                            <input type="text" name="name" id="name" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="single-input-unit">
                                                            <label htmlFor="m-id">Email</label>
                                                            <input type="email" name="m-id" id="m-id" placeholder="Your email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="single-input-unit">
                                                            <label htmlFor="message">Question</label>
                                                            <textarea name="message" id="message" placeholder="Your question..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-btn">
                                                    <button className="fill-btn">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <CategoryList />
                                    <div className="col-lg-12 col-md-6">
                                    </div>
                                    <div className="col-lg-12 col-md-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp">
                        <div className="col-12">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ForumMain;