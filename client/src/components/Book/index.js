import React from "react";
import "../style.css";
import {useHistory} from "react-router-dom";

function Book() {
    const history = useHistory();
    return (
        <div className="homeDiv">
            <h1 className="headingTwo">You have no bookings yet! Make a booking below:</h1>
            <button className="btn">New Booking</button>
        </div>
    )
}

export default Book;