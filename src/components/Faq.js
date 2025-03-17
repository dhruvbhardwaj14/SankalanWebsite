import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 

const Faq = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="faq-header">
          <h1 className="faq-title">
            FAQ 
            <span className="faq-icon">
              <FontAwesomeIcon icon={faBookOpen} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Faq;
