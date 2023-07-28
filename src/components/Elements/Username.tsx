import React from "react";

interface IProps {
    color: string | undefined;
    username: string | undefined;
}

const Username: React.FC<IProps> = ({username, color}) => {
    return (
        <span style={{color: color}}>{username}</span>
    )
}

export default Username;