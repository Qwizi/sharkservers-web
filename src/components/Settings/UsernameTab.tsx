import {useSession} from "next-auth/react";

const UsernameTab = () => {
    return (
        <div className="creator-info-personal mb-40 wow fadeInUp">
            <form className="personal-info-form" action="#">
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-input-unit">
                            <label>Nazwa użytkownika</label>
                            <input type="text" defaultValue="Steve"/>
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

export default UsernameTab