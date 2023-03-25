import Link from "next/link";

const TopCreatorTwo = () => {
    const CreatorList = [
        {
            profileImage: 'assets/img/profile/profile1.jpg',
            name: 'Stive Machman',
            artistId: '@machman',
            artistNumber: '820',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile2.jpg',
            name: 'Jobanico Mina',
            artistId: '@jobanico',
            artistNumber: '80',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile3.jpg',
            name: 'Walter Russell',
            artistId: '@russell',
            artistNumber: '82',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile4.jpg',
            name: 'Mary Callahan',
            artistId: '@mary.hano',
            artistNumber: '720',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile5.jpg',
            name: 'John Schreffler',
            artistId: '@john.874',
            artistNumber: '870',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile6.jpg',
            name: 'Kenny Chess',
            artistId: '@chess.62',
            artistNumber: '80',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile7.jpg',
            name: 'Jeffrey Hayes',
            artistId: '@jerrifo',
            artistNumber: '880',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile8.jpg',
            name: 'Patricia Stephens',
            artistId: '@stephens',
            artistNumber: '820',
            artistType: 'Created',
            follow: 'follow',
        },
        {
            profileImage: 'assets/img/profile/profile1.jpg',
            name: 'Stive Machman',
            artistId: '@machman',
            artistNumber: '820',
            artistType: 'Created',
            follow: 'follow',
        },

    ];

    return (
        <section className="top-seller-area pt-110">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="row wow fadeInUp">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title1">
                                    <h2 className="section-main-title1 mb-40">Comming soon</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            {CreatorList &&
                                <div className="row wow fadeInUp">
                                    {CreatorList.map((TopCreatorTwo, num) => (
                                        <div key={num} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div className="creator-single creator-single-short creator-single-filled mb-30">
                                                <div className="creator-wraper">
                                                    <div className="creator-inner">
                                                        <div className="creator-content pos-rel creator-short-content">
                                                            <div className="profile-img pos-rel">
                                                                <Link href="/creators"><img src={TopCreatorTwo.profileImage} alt="profile-img" /></Link>
                                                            </div>
                                                            <div className="creator-info">
                                                                <div>
                                                                    <h4 className="artist-name pos-rel">
                                                                        <Link href="/creators">{TopCreatorTwo.name}</Link>
                                                                        <span className="profile-verification verified">
                                                                            <i className="fas fa-check"></i>
                                                                        </span>
                                                                    </h4>
                                                                    <div className="artist-id">{TopCreatorTwo.artistId}</div>
                                                                    <div className="artist-meta-item">
                                                                        <div className="artist-created">{TopCreatorTwo.artistNumber}</div>
                                                                        <div className="artist-meta-type">{TopCreatorTwo.artistType}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="artist-follow-btn">
                                                                    <button className="follow-artist">{TopCreatorTwo.follow}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCreatorTwo;