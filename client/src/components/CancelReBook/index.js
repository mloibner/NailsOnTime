import React, {useEffect, useState} from "react";
import "../style.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CancelReBook() {
    const history = useHistory();
    const [booking, deleteBooking] = useState({booked:""});
    const [updatedBooking, changeBooking] = useState("")

    function newDelete(){
        axios.delete("/api/booking/delete", booking).then(()=>{
        }).catch((err)=>{
            console.error(err)
        });
    };

    function bookingChange(){
        axios.put("/api/booking/change", updatedBooking).then(()=>{
        }).catch((err)=>{
            console.error(err)
        });
    }

    useEffect(()=>{
        newDelete();
        bookingChange();
    });

   return ( <div className="homeDiv">
        <button className="btn" onClick={deleteBooking, ()=> {history.push("/booking")}}>Cancel</button>
        <button className="btn" onClick={changeBooking, ()=> {history.push("/booking")}}>Change</button>
    </div>)
};

export default CancelReBook;