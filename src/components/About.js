import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb} from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 

const About = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="about-header">
          <h1 className="about-title">
            ABOUT 
            <span className="about-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
