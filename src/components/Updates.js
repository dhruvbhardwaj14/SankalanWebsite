import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 

const Updates = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="updates-header">
          <h1 className="updates-title">
            UPDATES 
            <span className="updates-icon">
              <FontAwesomeIcon icon={faBell} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Updates;
