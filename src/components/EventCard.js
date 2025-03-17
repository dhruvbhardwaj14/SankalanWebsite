import React from "react";
import "../styles/Components.css"; 

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
        <div  className="event-image-container">
      <img src={event.image} alt={event.title} className="event-image" />
      </div>
      <div className="event-details">
        <h2 className="event-title">{event.title}</h2>
        <p className="event-description">{event.description}</p>
        <p className="event-date-time">{event.date} | {event.time}</p>
      </div>
      <button className="register-btn">Register Now</button>
    </div>
  );
};

export default EventCard;
