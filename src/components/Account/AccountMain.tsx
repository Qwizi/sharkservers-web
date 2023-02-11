import Link from "next/link"

const AccountMain = () => {

    return (
        <section className="creator-info-area pt-130 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className="creator-info-details mb-40 wow fadeInUp">
                                <div className="creator-cover-img pos-rel">
                                    <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                                    <img src="assets/img/profile/profile-cover/profile-cover4.jpg" alt="cover-img" />
                                </div>
                                <div className="creator-img-name">
                                    <div className="profile-img pos-rel">
                                        <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                                        <img src="assets/img/profile/profile1.jpg" alt="profile-img" />
                                    </div>
                                    <div className="creator-name-id">
                                        <h4 className="artist-name pos-rel">
                                            Kallaban Joy
                                            <span className="profile-verification verified">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </h4>
                                        <div className="artist-id">@Kalla.ban</div>
                                    </div>
                                </div>
                                <div className="profile-setting-list">
                                    <ul>
                                        <li className="active"><Link href="/creator-profile-info-personal"><i className="flaticon-account"></i>Informacje ogolne</Link></li>
                                        <li><a href="#"><i className="flaticon-settings"></i>Nazwa użytkownika</a></li>
                                        <li><a href="#"><i className="flaticon-notification"></i>Hasło</a></li>
                                        <li><a href="#"><i className="flaticon-wallet-1"></i>Role</a></li>
                                        <li><a href="#"><i className="flaticon-check-mark"></i>Polaczone konta</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="creator-info-personal mb-40 wow fadeInUp">
                                <form className="personal-info-form" action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Username</label>
                                                <input type="text" defaultValue="Steve" disabled/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input-unit">
                                                <label>Email</label>
                                                <input type="text" defaultValue="Steve" disabled/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="personal-info-btn">
                                        <button id="update-btn" className="fill-btn">Update Now</button>
                                        <button id="reset-btn" className="fill-btn-orange">Reset All</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
    
}

export default AccountMain