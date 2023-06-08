import {useSession} from "next-auth/react";

const PasswordTab = () => {
    return (
        <div className="creator-info-personal mb-40 wow fadeInUp">
            <form className="personal-info-form" action="#">
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label>Obecne haslo</label>
                            <input type="current_password" defaultValue="Steve"/>
                        </div>
                    </div>
                     <div className="col-md-12">
                        <div className="single-input-unit">
                            <label>Nowe haslo</label>
                            <input type="password" defaultValue="Steve"/>
                        </div>
                    </div>
                     <div className="col-md-12">
                        <div className="single-input-unit">
                            <label>Powtorz haslo</label>
                            <input type="password" defaultValue="Steve"/>
                        </div>
                    </div>
                </div>
                <div className="personal-info-btn">
                    <button id="update-btn" className="fill-btn">Aktualizuj</button>
                </div>
            </form>
        </div>
    )
}

export default PasswordTab