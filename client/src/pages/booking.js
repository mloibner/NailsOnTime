import React from "react";
import Calendar from "../components/Calendar"
import Footer from "../components/Footer"
import NavbarLoggedIn from "../components/NavbarLoggedIn"

function Booking() {
    return(
        <div>
            <NavbarLoggedIn />
            <Calendar />
            <Footer />
        </div>
    )
}

export default Booking;