import React, { useState} from "react";
import "../style.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CancelReBook() {
    const history = useHistory();

    function newDelete(){
        axios.delete("/api/booking/delete").then(()=>{
            window.location.reload();
        }).catch((err)=>{
            console.error(err)
        });
    };

   return ( <div className="homeDiv">
        <button className="btn" onClick={newDelete}>Cancel</button>
        <button className="btn" onClick={()=> {history.push("/booking")}}>Change</button>
    </div>)
};

export default CancelReBook;