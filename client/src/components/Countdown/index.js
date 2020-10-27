import React from "react";
import "../style.css";
import axios from "axios";
import Moment from "react-moment";


function Countdown() { 

  function getBooking() {
    axios.get("/api/booking").then((res)=> {
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    });
  }

return (
        <div className="homeDiv">
        <h1 className="headingTwo">Nails on time in:</h1>
        <div>
            <Moment>
                
            </Moment>
        </div>
        <h3 className="headingTwo">Rock Up when the Clock Up</h3>
    </div>
    )
   
};

export default Countdown;