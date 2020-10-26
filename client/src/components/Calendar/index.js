import React, {useState} from 'react';
import "../style.css"
import moment from "moment";
import DatePicker from 'react-date-picker';
import axios from "axios";
import {useHistory} from "react-router-dom";


function Calendar(){

  const [booking, setBooking] = useState({salon: "", technician: "", date: ""});
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());

    function handleBooking() {
        console.log(booking);
        axios.post("/api/booking", booking);
        history.push("/schedule");
    }

  return (
    <div className="homeDiv booking">
        <h1 className="headingThree">Book Appointment</h1>
        <form className="font">
          <label for="salon">Salon</label>
          <select id="salon" name="salon" className="salInput" onChange={(e)=>{
            const updateSalon = {...booking, salon: e.target.value}
            setBooking(updateSalon);
            }}>
            <option value="">Select</option>
            <option value="Glo Nails Drummoyne">Glo Nails Drummoyne</option>
            <option value="Ben's Nails Five Dock">Ben's Nails Five Dock</option>
          </select>
        </form>
        <form className="font" >
          <label for="technician">Technician</label>
          <select id="technician" name="technician" className="salInput" onChange={(e)=>{
            const updateTechnician = {...booking, technician: e.target.value}
            setBooking(updateTechnician)
            }}>
            <option value="">Select</option>
            <option value="rachel">Rachel</option>
            <option value="anna">Anna</option>
            <option value="lucky">Lucky</option>
            <option value="tina">Tina</option>
          </select>
        </form>  
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={moment().toDate()}
        value={booking.date}
        onChange={()=>{
          const updateDate = {...booking, date: {startDate}}
          setBooking(updateDate)}}
      />
      <div className="btnNext">
        <button type="submit" onSubmit={handleBooking}className="btnNext">Book</button>
      </div>
    </div>
  );

}



export default Calendar;