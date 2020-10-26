import React from "react";
import "../style.css";
import {useHistory} from "react-router-dom";

function Book() {

    function createNewBook() {
    const history = useHistory();
    history.push("/booking");
    }
    return (
        <div className="homeDiv">
            <h1 className="headingTwo">You have no bookings yet! Make a booking below:</h1>
            <button className="btn" onClick={createNewBook}>New Booking</button>
        </div>
    )
}

export default Book;