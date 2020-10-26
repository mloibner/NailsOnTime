import React from "react";
import "../style.css";
import {useHistory} from "react-router-dom";

function NextBtn() {

    function nextPage() {
        const history = useHistory();
        history.push("/schedule");
    }
    
    return (
        <div className="btnNext">
        <button onClick={nextPage()}className="btnNext">Book</button>
        </div>
    )
}

export default NextBtn;
