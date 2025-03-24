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
// Get today's date without time
const today = new Date();
today.setHours(0, 0, 0, 0);

// Function to calculate event category
function getEventCategory(eventDate) {
  const eventDateObj = new Date(eventDate);
  eventDateObj.setHours(0, 0, 0, 0);

  if (eventDateObj.getTime() === today.getTime()) {
    return "Ongoing";
  } else if (eventDateObj > today) {
    return "Upcoming";
  } else {
    return "Past";
  }
}
const allEvents = [
  {
    id: 1,
    title: "HACKDUCS",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
  },
  {
    id: 2,
    title: "BLIND CODING",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
  },
  {
    id: 3,
    title: "SQUASH THE BUGS",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
  },
  {
    id: 4,
    title: "CODE AUCTION",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
  },
  {
    id: 5,
    title: "ALGOHOLICS",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
  },
  {
    id: 6,
    title: "OVER TORQUE",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
  },
  {
    id: 7,
    title: "CHAKRAVYUH",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
  },
  {
    id: 8,
    title: "DASTUR-E-MEHFIL",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
  },
  {
    id: 9,
    title: "FEETS ON FIRE",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
  },
];

const categories = ["All", "Upcoming", "Ongoing", "Past"];

const EventFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
  activeCategory === "All"
    ? allEvents.sort((a, b) => new Date(a.date) - new Date(b.date))
    : allEvents
        .filter((event) => event.category === activeCategory)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

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
