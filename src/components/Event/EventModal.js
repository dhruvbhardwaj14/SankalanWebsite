import React, { useEffect } from "react";
import "../../styles/EventModal.css"; // Updated CSS

const EventModal = ({ event, closeModal }) => {
  useEffect(() => {
    // Add modal-open class to prevent scrolling
    document.body.classList.add("modal-open");

    return () => {
      // Remove modal-open class when modal is closed
      document.body.classList.remove("modal-open");
    };
  }, []);

  if (!event) return null;

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal
      >
        {/* Close Button */}
        <button className="modal-close-btn" onClick={closeModal}>
          ❌
        </button>

        {/* Modal Content */}
        <div className="modal-content">
          {/* Top Section - Image + Info */}
          <div className="modal-top">
            <div className="modal-image-container">
              <img
                src={event.image}
                alt={event.title}
                className="modal-image"
              />
            </div>
            <div className="modal-info">
              <h2 className="modal-title">{event.title}</h2>
              <p className="modal-date-time">
                📅 {event.date} | ⏰ {event.time}
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="modal-description">
            <h3>Description</h3>
            <p>{event.longDescription}</p>
          </div>

          {/* Rules Section */}
          <div className="modal-rules">
            <h3>Rules</h3>
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index}> {rule}</li>
              ))}
            </ul>
          </div>

          {/* Register Button */}
          <button
          className="register-btn modal-register-btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevent modal from opening on button click
            window.open(event.link, "_blank", "noopener,noreferrer"); // Open event link in new tab
          }}
        >
          Register Now
        </button>

        </div>
      </div>
    </div>
  );
};

export default EventModal;
