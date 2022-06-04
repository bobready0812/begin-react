import React from "react";
import './rspCom.css';

const Com = ({comVal, comWin}) => {
    return(
        <div className="comBack">
            <h1 className="comh1">Com {comWin}</h1>
            <h1 className="comValue">{comVal}</h1>
        </div>
    )
}

export default Com;