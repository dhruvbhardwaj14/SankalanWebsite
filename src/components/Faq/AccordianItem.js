import React, { useState, useRef, useEffect } from "react";
import "../../styles/Accordian.css"; // Import the CSS file

const AccordianItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference to the content height

  // Function to convert specific keywords to links
  const highlightLinks = (text) => {
    const linkMappings = {
      About: "/",
      Events: "/events",
      "Contact Us": "/contact",
    };

    // Create a regex pattern for exact case-sensitive matches
    const regex = /\b(About|Events|Contact Us)\b/g;

    return text.replace(regex, (matched) => {
      const url = linkMappings[matched]; // Get the URL for the matched word
      return url
        ? `<a href="${url}" class="highlight-link">${matched}</a>`
        : matched;
    });
  };

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
      {/* Accordion Header */}
      <button
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="accordion-title">{question.toUpperCase()}</span>
        <span className={`icon ${isOpen ? "rotate" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Accordion Body with highlighted links */}
      <div
        ref={contentRef}
        className={`accordion-body ${isOpen ? "open" : ""}`}
      >
        <p
          className="accordion-content"
          dangerouslySetInnerHTML={{
            __html: highlightLinks(answer),
          }}
        />
      </div>
    </div>
  );
};

export default AccordianItem;
