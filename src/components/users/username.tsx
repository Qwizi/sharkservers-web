import {UserOut2Schema} from "sharkservers-sdk"
type UsernameType = {
    color: string | undefined;
    username: string | undefined; 
}
export default function Username({color, username}: UsernameType) {
    return (
        <span style={{color: color}}>{username}</span>
    )
}