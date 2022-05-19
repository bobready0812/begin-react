import React from "react";
import './rspBack.css';

const Back = ({children, comValue, setComValue, userValue, setUserValue, comWin, setComWin, userWin, setUserWin}) => {
    const valueArr = ["가위", "바위", "보"];
    const onClick1 = () => {
        const num1 = Math.floor(Math.random() * 3);
        setComValue(valueArr[num1]);
        setUserValue("가위");
        if(comValue === "가위") {
            setComWin("비김");
            setUserWin("비김");
        } else if (comValue === "바위")
    }

    const onClick2 = () => {
        const num1 = Math.floor(Math.random() * 3);
        setComValue(valueArr[num1]);
        setUserValue("바위");
    }

    const onClick3 = () => {
        const num1 = Math.floor(Math.random() * 3);
        setComValue(valueArr[num1]);
        setUserValue("보");
    }


    return (
        <div className="background">
        <h1 className="title">가위 바위 보!</h1>
        <div>{children}</div>
        <div onClick={onClick1} className="btn">
           <h1 className="btnh1">가위</h1>
        </div>
        <div onClick={onClick2} className="btn2">
           <h1 className="btnh1">바위</h1>
        </div>
        <div onClick={onClick3} className="btn3">
           <h1 className="btnh1">보</h1>
        </div>
        </div>
    )
};


export default Back;