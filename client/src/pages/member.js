import React from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Countdown from "../components/Countdown"
import CancelReBook from "../components/CancelReBook"
import Book from "../components/Book"
import Footer from "../components/Footer"

const booking = true

function Member() {

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