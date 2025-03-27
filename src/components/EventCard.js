import React, { useState } from "react";
import "../styles/Components.css"; 
import EventModal from "./Event/EventModal.js";

const EventCard = ({ event }) => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle card click (except for register button)
  const handleCardClick = (e) => {
    if (!e.target.classList.contains("register-btn")) {
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Event Card */}
      <div className="mainEvent-card" onClick={handleCardClick}>
        <div className="event-image-container">
          <img src={event.image} alt={event.title} className="event-image" />
        </div>
        <div className="event-details">
          <h2 className="event-title">{event.title}</h2>
          <p className="event-description">{event.description}</p>
          <p className="event-date-time">
            {event.date} | {event.time}
          </p>
        </div>
        <button
        className="register-btn"
        onClick={(e) => {
          e.stopPropagation(); // Prevent modal from opening when clicking the button
          window.open(event.link, "_blank"); // Open link in a new tab
        }}
      >
        Register Now
      </button>
      </div>

      {/* Event Modal - Opens on Card Click */}
      {isModalOpen && <EventModal event={event} closeModal={closeModal} />}
    </>
  );
};

export default EventCard;
