import React, { useState } from "react";
import "../../styles/Accordian.css"; // Import the CSS file


const AccordianItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="accordion-item">
    <button className="accordion-header"   onClick={() => setIsOpen(!isOpen)}>
      <span style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "18px" }}>
        {question}
      </span>
      <span className="icon">{isOpen ? "−" : "+"}</span> {/* + / - Icon */}
    </button>
    {isOpen && (
      <div className="accordion-body">
        <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontStyle: "italic" }}>
          {answer}
        </p>
      </div>
    )}
  </div>
  );
};

export default AccordianItem;