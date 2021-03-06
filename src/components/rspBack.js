import React from "react";
import './rspBack.css';

const Back = ({children, comValue, setComValue, userValue, setUserValue, comWin, setComWin, userWin, setUserWin}) => {
    const valueArr = ["가위", "바위", "보"];
    
    const judge= (a,b) => {
     const num3 = valueArr.indexOf(a) - valueArr.indexOf(b);
     if(num3 === 0) {
         setUserWin("비김");
         setComWin("비김");
     } else if (num3 === 1){
         setComWin("승리");
         setUserWin("패배");
     } else if (num3 === 2){
         setComWin("패배");
         setUserWin("승리")
     } else if (num3 === -1) {
         setComWin("패배");
         setUserWin("승리");
     } else if (num3 === -2) {
         setComWin("승리");
         setUserWin("패배");
     }
    
    }

    const onClickS = () => {
        const num1 = Math.floor(Math.random() * 3);
        const comV = valueArr[num1]
        setComValue(comV);
        setUserValue("가위");
        judge(comV, "가위");
       
    }

    const onClickR = () => {
        const num1 = Math.floor(Math.random() * 3);
        const comVal = valueArr[num1];
        setComValue(comVal);
        setUserValue("바위");
        judge(comVal, "바위");
    }

    const onClickP = () => {
        const num1 = Math.floor(Math.random() * 3);
        const comV = valueArr[num1];
        setComValue(comV);
        setUserValue("보");
        judge(comV, "보");
    }


    return (
        <div className="background">
        <h1 className="title">가위 바위 보!</h1>
        <div>{children}</div>
        <div onClick={onClickS} className="btnS">
           <h1 className="btnh1">가위</h1>
        </div>
        <div onClick={onClickR} className="btnR">
           <h1 className="btnh1">바위</h1>
        </div>
        <div onClick={onClickP} className="btnP">
           <h1 className="btnh1">보</h1>
        </div>
        </div>
    )
};


export default Back;