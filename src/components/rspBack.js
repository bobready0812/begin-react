import React from "react";
import './rspBack.css';

const Back = ({children}) => {
    return (
        <div className="background">
        <h1 className="title">가위 바위 보!</h1>
        <div>{children}</div>
        </div>
    )
};


export default Back;