import React, {useEffect, useState} from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Countdown from "../components/Countdown"
import CancelReBook from "../components/CancelReBook"
import Book from "../components/Book"
import axios from "axios"
import Footer from "../components/Footer"

function Member() {

  const [user, setUsername] = useState("")
  const [booking, setBooking] = useState();

  function getUsername() {
  
    axios.get("/api/users/me", user).then((res)=> {
      console.log(res)
      setUsername(res.data.username)
      getBooking(res.data.username)
      }).catch((err)=>{
      console.log(err)
    });
  }

  function getBooking(user) {
    axios.get("/api/booking/" + user, booking).then((res)=> {
        setBooking(res.data)
    }).catch((err)=>{
        console.log(err)
    });
  }
  useEffect(()=> { getUsername() }, [])
if (booking === undefined) {
  return "loading"
}
  if (!booking) {
    return (
      <div>
        <NavbarLoggedIn />
        <Book />
        <Footer />
      </div>
    )
  } else return (
  <div>
    <NavbarLoggedIn />
    <Countdown />
    <CancelReBook />
    <Footer />
  </div>
)}

export default Member;