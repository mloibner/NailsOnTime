import React, {useEffect, useState} from "react";
import "../style.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
import DatePicker from "react-date-picker";

function BookingPage() {

//     const [booking, setTime] = useState({time: ""});
//     const history = useHistory();

//     function handleBooking(e) { 
//         e.preventDefault();
//         console.log(booking)
//         axios.post("/api/booking", booking).then((res)=>{
//             history.push("/member");
//         }).catch((err)=>{
//             console.error(err)
//         });
//     }



//     return(
//     <div>
//         <h1 className="headingFour">Book a time</h1>
//         <div className="scheduleSal">Nail Salon will go in here
//         </div>
//         <div className="scheduleSal">Technician will go in here
//         </div>
//             <table>
//                 <tbody >
//                      <tr>
//                         <td id="9AM">9AM</td>
//                         <td id="9AM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}>blank</td>
//                     </tr>
//                     <tr>
//                         <td id="9:30AM">9:30AM</td>
//                         <td id="9:30AM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="10AM">10AM</td>
//                         <td id="10AM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="10:30AM">10:30AM</td>
//                         <td id="10:30AM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="11AM">11AM</td>
//                         <td id="11AM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="11:30AM">11:30AM</td>
//                         <td id="11:30AM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="12PM">12PM</td>
//                         <td id="12PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="12:30PM">12:30PM</td>
//                         <td id="12:30PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="1PM">1PM</td>
//                         <td id="1PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="1:30PM">1:30PM</td>
//                         <td id="1:30PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="2PM">2PM</td>
//                         <td id="2PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="2:30PM">2:30PM</td>
//                         <td id="2:30PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="3PM">3PM</td>
//                         <td id="3PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="3:30PM">3:30PM</td>
//                         <td id="3:30PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="4PM">4PM</td>
//                         <td id="4PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                     <tr>
//                         <td id="4:30PM">4:30PM</td>
//                         <td id="4:30PM" value={booking.time} onClick={(e)=> {
//                     const updatedBooking = {...booking, time: e.target.id}
//                     setTime(updatedBooking)}}></td>
//                     </tr>
//                 </tbody>
//             </table>
//     <button type="submit" onSubmit={handleBooking} className="btnNext">Book</button>
// </div>)

const [startDate, setStartDate] = useState(new Time());
    return (
        <div>   
        
               <h1 className="headingFour">Book a time</h1>
                <div className="scheduleSal">Nail Salon will go in here
             </div>
                <div className="scheduleSal">Technician will go in here
            </div>
        
      <DatePicker
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      </div>
    );
};

export default BookingPage;