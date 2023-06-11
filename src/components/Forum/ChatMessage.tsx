import Username from "@/components/Elements/Username";

interface IProps {
    message: string;
    username: string;
    color: string;
}

const ChatMessage: React.FC<IProps> = ({message, username, color}) => {
    return (
        <>
            <div className="activity-wrapper-action-single pos-rel">
                <div className="activity-3dots-menu">
                    <button className="art-3dots-icon"><i
                        className="fal fa-ellipsis-v"></i></button>
                </div>
                <div className="profile-img pos-rel"
                     style={{width: "45px", height: "45px"}}>
                    <img
                        src="/assets/img/profile/profile1.jpg"
                        alt="profile-img"
                    />
                </div>
                <div className="actvity-text"><Username color={color} username={username}/></div>
                <div className="activity-meta-text">
                    <div className="actvity-text">
                        {message}
                    </div>
                </div>
                <div className="activity-time">5 minutes ago</div>
            </div>
        </>
    )
}

export default ChatMessage