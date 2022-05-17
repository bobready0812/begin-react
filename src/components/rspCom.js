import React from "react";
import './rspCom.css';

const Com = ({comValue}) => {
    return(
        <div className="comBack">
            <h1 className="comh1">Com(패배)</h1>
            <h1 className="comV">{comValue}</h1>
        </div>
    )
}

export default Com;