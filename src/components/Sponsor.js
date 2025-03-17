import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 

const Sponsor = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="sponsors-header">
          <h1 className="sponsors-title">
            SPONSORS
            <span className="sponsor-icon">
              <FontAwesomeIcon icon={faHandsHelping} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
