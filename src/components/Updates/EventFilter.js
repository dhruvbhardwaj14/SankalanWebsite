import React, { useState } from "react";
import "../../styles/EventFilter.css";
const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Add suffix for day
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // 11th, 12th, 13th...
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getDaySuffix(day)} ${month}, ${year}`;
};
const allEvents = [
  { id: 1, title: "Hackathon 2025", category: "Upcoming", date: "2025-04-1" },
  { id: 2, title: "AI Workshop", category: "Upcoming", date: "2025-04-20" },
  { id: 3, title: "Coding Marathon", category: "Ongoing", date: "2025-03-25" },
  { id: 4, title: "Web Development Bootcamp", category: "Past", date: "2025-02-15" },
];

const categories = ["All", "Upcoming", "Ongoing", "Past"];

const EventFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? allEvents
      : allEvents.filter((event) => event.category === activeCategory);

  return (
    <div className="event-filter-container">
      <h2 className="eventUpdates-title">Event Updates</h2>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{formatDate(event.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventFilter;
