import React, { useState } from "react";
import "../../styles/EventFilter.css";

// ✅ Format Date with Suffix (e.g., 19th April, 2025)
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

// ✅ Get today's date without time
const today = new Date();
today.setHours(0, 0, 0, 0);

// ✅ Function to calculate event category
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

// ✅ Event Data with Correct Dates & Times
export const allEvents = [
  {
    id: 1,
    title: "HACKDUCS",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "BLIND CODING",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
    time: "1:30 PM",
  },
  {
    id: 3,
    title: "SQUASH THE BUGS",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
    time: "3:30 PM",
  },
  {
    id: 4,
    title: "CODE AUCTION",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
    time: "10:30 AM",
  },
  {
    id: 5,
    title: "ALGOHOLICS",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
    time: "12:00 PM",
  },
  {
    id: 6,
    title: "OVER TORQUE",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
    time: "10:30 AM",
  },
  {
    id: 7,
    title: "CHAKRAVYUH",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
    time: "12:00 PM",
  },
  {
    id: 8,
    title: "DASTUR-E-MEHFIL",
    category: getEventCategory("2025-04-19"),
    date: "2025-04-19",
    time: "1:30 PM",
  },
  {
    id: 9,
    title: "FEETS ON FIRE",
    category: getEventCategory("2025-04-20"),
    date: "2025-04-20",
    time: "5:30 PM",
  },
];

// ✅ Helper Function to Convert 12-hour Time to 24-hour Format for Sorting
const convertTo24Hour = (time) => {
  const [hour, minute, period] = time
    .match(/(\d+):(\d+)\s*(AM|PM)/i)
    .slice(1);
  let hours = parseInt(hour, 10);
  if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (period.toUpperCase() === "AM" && hours === 12) hours = 0;
  return `${String(hours).padStart(2, "0")}:${minute}`;
};

// ✅ Event Categories for Filtering
const categories = ["All", "Upcoming", "Ongoing", "Past"];

// 🎯 Main Component
const EventFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Filter and Sort Events by Date and Time
  const filteredEvents =
    activeCategory === "All"
      ? allEvents.sort((a, b) => {
          const dateTimeA = new Date(
            `${a.date} ${convertTo24Hour(a.time)}`
          );
          const dateTimeB = new Date(
            `${b.date} ${convertTo24Hour(b.time)}`
          );
          return dateTimeA - dateTimeB; // Sort by Date & Time
        })
      : allEvents
          .filter((event) => event.category === activeCategory)
          .sort((a, b) => {
            const dateTimeA = new Date(
              `${a.date} ${convertTo24Hour(a.time)}`
            );
            const dateTimeB = new Date(
              `${b.date} ${convertTo24Hour(b.time)}`
            );
            return dateTimeA - dateTimeB;
          });

  return (
    <div className="event-filter-container">
      <h2 className="eventUpdates-title">Event Updates</h2>
      {/* ✅ Filter Buttons */}
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
      {/* ✅ Render Filtered & Sorted Events */}
      <div className="event-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>
              {formatDate(event.date)} at {event.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventFilter;
