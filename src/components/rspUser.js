import React from "react";
import './rspUser.css';

const User = ( {userValue}) => {
    return (
        <div className="userBack">
            <h1 className="userh1">User(승리)</h1>
            <h1 className="userValue">{userValue}</h1>
        </div>
    )
}


export default User;