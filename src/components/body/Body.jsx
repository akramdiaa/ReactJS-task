import React from "react";
import SurvicesIcons from "./selfsurvices/SurvicesIcons";
import UserDetails from "./information/UserDetails";
import "./Body.scss";

function Body() {
    return (
        <div className="body-container">
            <UserDetails />
            <SurvicesIcons />
        </div>
    );
    
}

export default Body;
