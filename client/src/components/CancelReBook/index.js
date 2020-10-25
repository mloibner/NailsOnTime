import React, {useState} from "react";
import "../style.css";
import { useHistory } from "react-router-dom"
import axios from "axios"

function CancelReBook() {
    const history = useHistory();
    const [booking, deleteBooking] = useState({booked:""})

    function newDelete(){
        axios.delete("/api/booking")

    }

   return ( <div className="homeDiv">
        <button className="btn" onClick={()=>{
            history.push("/member")
        }}>Cancel</button>
        <button className="btn" onClick>Change</button>
    </div>)
};

export default CancelReBook;