import React from "react";
import Salon from "../components/Salon"
import Technician from "../components/Technician"
import MyApp from "../components/Calendar"
import Footer from "../components/Footer"
import NavbarLoggedIn from "../components/NavbarLoggedIn"
import NextBtn from "../components/NextBtn/NextBtn";

function Booking() {
    return(
        <div>
            <NavbarLoggedIn />
            <Salon />
            <Technician />
            <MyApp />
            <NextBtn />
            <Footer />
        </div>
    )
}

export default Booking;