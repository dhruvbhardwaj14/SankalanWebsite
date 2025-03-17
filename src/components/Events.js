import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "../styles/Components.css";
import EventCard from "./EventCard.js";

const technicalEvents = [
  { 
    id: 1, 
    title: "Code Clash", 
    description: "Solve real-world problems in a high-stakes coding battle.", 
    date: "March 20, 2025", 
    time: "10 AM", 
    tag: "Technical", 
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" 
  },
  { 
    id: 2, 
    title: "AI Warfare", 
    description: "Compete in AI-powered bot battles and automation challenges.", 
    date: "March 21, 2025", 
    time: "2 PM", 
    tag: "Technical", 
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
  },
  { 
    id: 3, 
    title: "Cyber CTF", 
    description: "Test your ethical hacking skills in a Capture the Flag competition.", 
    date: "March 22, 2025", 
    time: "4 PM", 
    tag: "Technical", 
    image: "https://images.pexels.com/photos/5380663/pexels-photo-5380663.jpeg" 
  },
  { 
    id: 4, 
    title: "Robotics Arena", 
    description: "Design, build, and battle your robots in an exciting showdown.", 
    date: "March 23, 2025", 
    time: "12 PM", 
    tag: "Technical", 
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg" 
  }
];

const nonTechnicalEvents = [
  { 
    id: 5, 
    title: "Mystery Quest", 
    description: "A thrilling treasure hunt filled with cryptic clues and riddles.", 
    date: "March 22, 2025", 
    time: "11 AM", 
    tag: "Non-Technical", 
    image: "https://images.pexels.com/photos/164503/pexels-photo-164503.jpeg" 
  },
  { 
    id: 6, 
    title: "Battle of Words", 
    description: "Engage in an intense debate on trending topics.", 
    date: "March 23, 2025", 
    time: "3 PM", 
    tag: "Non-Technical", 
    image: "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg" 
  },
  { 
    id: 7, 
    title: "Quiz Mania", 
    description: "Test your general knowledge with an exciting quiz competition.", 
    date: "March 24, 2025", 
    time: "1 PM", 
    tag: "Non-Technical", 
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg" 
  },
  { 
    id: 8, 
    title: "Gaming Showdown", 
    description: "Compete in an electrifying eSports tournament.", 
    date: "March 25, 2025", 
    time: "5 PM", 
    tag: "Non-Technical", 
    image: "https://images.pexels.com/photos/7915425/pexels-photo-7915425.jpeg" 
  }
];


const Events = () => {
  const [category, setCategory] = useState("technical");
  const events = category === "technical" ? technicalEvents : nonTechnicalEvents;

  return (
    <div className="mainPage">
      <div className="eventParallax">
        {/* Event Header */}
        <div className="events-header">
          <FaBullhorn className="megaphone left" />
          <h1 className="events-title">Events</h1>
          <FaBullhorn className="megaphone right" />
        </div>

        {/* Event Container */}
        <div className="event-container">
          {/* Buttons Section */}
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

          {/* Event List */}
          <div className="event-list">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
