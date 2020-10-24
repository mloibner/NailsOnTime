import React from "react";
import Salon from "../components/Salon"
import Technician from "../components/Technician"
import MyApp from "../components/Calendar"
import Footer from "../components/Footer"
import NavbarLoggedIn from "../components/NavbarLoggedIn"

function Booking() {
    return(
        <div>
            <NavbarLoggedIn />
            <Salon />
            <Technician />
            <MyApp />
            <Footer />
        </div>
    )
}

export default Booking;