import React from "react";
import './rspBack.css';

const Back = ({children, comValue, setComValue, userValue, setUserValue}) => {
    const valueArr = ["가위", "바위", "보"];
    const onClick = () => {
        const num1 = Math.floor(Math.random() * 3)
        const num2 = Math.floor(Math.random() * 3)
        setComValue(valueArr[num1]);
        setUserValue(valueArr[num2]);
    }


    return (
        <div className="background">
        <h1 className="title">가위 바위 보!</h1>
        <div>{children}</div>
        <div onClick={onClick} className="btn">
           <h1 className="btnh1">시작</h1>
        </div>
        </div>
    )
};


export default Back;