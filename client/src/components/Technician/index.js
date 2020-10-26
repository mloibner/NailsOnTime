import React from "react";
import "../style.css";

//MONIQUE, read me:   How are you going to have the options in salon linked to the technician options? Are you going to 
//need to use PROPS or something like that to execute so the technician list changes depending on the input of the 
//selected salon. Ask Carl. 


function Technician() {
    return (
        <div className="homeDiv">
            <form className="font">
                <label for="technician">Technician</label>
                <select id="technician" name="technician" className="salInput">
                    <option value="">Select</option>
                    <option value="rachel">Rachel</option>
                    <option value="anna">Anna</option>
                    <option value="lucky">Lucky</option>
                    <option value="tina">Tina</option>
                </select>
            </form>
        </div>
    );
}

export default Technician;