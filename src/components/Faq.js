import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 
import Accordion from "./Faq/Accordian";

const Faq = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="faq-header">
       
          <h1 className="faq-title">

            <span>
            FAQ ?
            <FontAwesomeIcon icon={faBookOpen} />
            </span>
         
            <span className="faq-icon">

              <Accordion />
            </span>
          </h1>
        
        
        </div>

       

      

     
       
      </div>

     
    </div>
  );
};

export default Faq;
