import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 

const Team = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="team-header">
          <h1 className="team-title">
            TEAM 
            <span className="team-icon">
              <FontAwesomeIcon icon={faUsers} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Team;
