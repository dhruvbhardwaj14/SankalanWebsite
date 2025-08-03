// src/components/Events.js
import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "../styles/Components.css";
import EventCard from "./EventCard.js";
import { technicalEvents, nonTechnicalEvents } from "../data/eventData";

const Events = () => {
  const [category, setCategory] = useState("technical");
  const events = category === "technical" ? technicalEvents : nonTechnicalEvents;

  const sortedEvents = [...events].sort((a, b) => {
    const dateTimeA = new Date(`${a.date} ${a.time}`);
    const dateTimeB = new Date(`${b.date} ${b.time}`);
    return dateTimeA - dateTimeB;
  });

  return (
    <div className="mainPage">
      <div className="eventParallax">
        <div className="events-header">
          <FaBullhorn className="megaphone left" />
          <h1 className="events-title">Events</h1>
          <FaBullhorn className="megaphone right" />
        </div>

        <div className="event-container">
          <div className="event-buttons">
            <button 
              className={`event-button ${category === "technical" ? "active" : ""}`} 
              onClick={() => setCategory("technical")}
            >
              Technical
            </button>
            <button 
              className={`event-button ${category === "nonTechnical" ? "active" : ""}`} 
              onClick={() => setCategory("nonTechnical")}
            >
              Non-Technical
            </button>
          </div>

          <div className="event-list">
            {sortedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
