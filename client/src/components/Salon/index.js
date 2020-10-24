import React from "react";
import "../style.css";

//MONIQUE, read me:   How are you going to have the options here linked to the technician options? Are you going to 
//need to use PROPS or something like that to execute so the technician list changes depending on the input of the 
//selected salon. Ask Carl. 


function SalonSelect() {
    return (
        <div className="homeDiv">
            <form className="font">
                <label for="salon">Salon</label>
                <select id="salon" name="salon">
                    <option value="">Select</option>
                    <option value="GloNailsDrummoyne">Glo Nails Drummoyne</option>
                    <option value="BensNailsFiveDock">Ben's Nails Five Dock</option>
                </select>
            </form>
        </div>
    );
}

export default SalonSelect;