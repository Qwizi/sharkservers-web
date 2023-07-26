'use client';
import {useSession} from "next-auth/react";

const MainTab = () => {
    const {data: session} = useSession()
    return (
        <>
            <form className="personal-info-form" action="#">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-input-unit">
                            <label>E-mail</label>
                            <input type="text" defaultValue={session?.user.email} disabled={true}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-input-unit">
                            <label>Nazwa użytkownika</label>
                            <input type="text" defaultValue={session?.user.username}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-input-unit">
                            <label>Wyswietlana rola</label>
                            <input type="text" defaultValue={session?.user.display_role.name} disabled={true}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-input-unit">
                            <label>Role</label>
                            <div className="common-select-arrow common-select-arrow-60 w-full">
                                <select name="g-select" className="gender-category-select w-full mb-30"
                                        defaultValue={session?.user.roles[0].id}>
                                    {session?.user.roles.map((role) => (
                                            <option key={role.id} value={role.id}>{role.name}</option>
                                        )
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default MainTab