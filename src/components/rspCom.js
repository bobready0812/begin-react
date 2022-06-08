import React from "react";
import './rspCom.css';

const Com = ({comValue, comWinVal}) => {
    return(
        <div className="comBack">
            <h1 className="comh1">Com {comWinVal}</h1>
            <h1 className="comValue">{comValue}</h1>
        </div>
    )
}

export default Com;