import React from "react";
import './rspUser.css';

const User = ( {userValue, userWin}) => {
    return (
        <div className="userBack">
            <h1 className="userh1">User {userWin}</h1>
            <h1 className="userValue">{userValue}</h1>
        </div>
    )
}


export default User;