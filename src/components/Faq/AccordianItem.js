import React, { useState, useRef, useEffect } from "react";
import "../../styles/Accordian.css"; // Import the CSS file

const AccordianItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference to the content height

  // Smooth transition for opening/closing
  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {question}
        </span>
        <span className={`icon ${isOpen ? "rotate" : ""}`}>{isOpen ? "−" : "+"}</span>

      </button>
      <div
        ref={contentRef}
        className={`accordion-body ${isOpen ? "open" : ""}`}
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease-out",
        }}
      >
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontStyle: "italic",
            margin: "10px 0",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AccordianItem;
