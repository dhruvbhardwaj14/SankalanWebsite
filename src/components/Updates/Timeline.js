import React from "react";
import "../../styles/Timeline.css";

const events = [
  {
    id: 1,
    title: "HACKDUCS",
    date: "2025-04-19",
    time: "10:00 AM",
    description:
      "A 24-hour coding marathon with exciting challenges and cash prizes.",
  },
  {
    id: 2,
    title: "BLIND CODING",
    date: "2025-04-20",
    time: "1:30 PM",
    description:
      "Code without seeing the screen, testing your memory and logic.",
  },
  {
    id: 3,
    title: "SQUASH THE BUGS",
    date: "2025-04-20",
    time: "3:30 PM",
    description: "Hunt down errors and fix bugs quickly to win!",
  },
  {
    id: 4,
    title: "CODE AUCTION",
    date: "2025-04-20",
    time: "10:30 AM",
    description: "Blend of strategy and coding with competitive bidding.",
  },
  {
    id: 5,
    title: "ALGOHOLICS",
    date: "2025-04-19",
    time: "12:00 PM",
    description:
      "Test your algorithmic problem-solving with complex puzzles.",
  },
  {
    id: 6,
    title: "OVER TORQUE",
    date: "2025-04-20",
    time: "10:30 AM",
    description:
      "Build and race your wireless bot through a challenging obstacle course!",
  },
  {
    id: 7,
    title: "CHAKRAVYUH",
    date: "2025-04-19",
    time: "12:00 PM",
    description:
      "A thrilling treasure hunt filled with cryptic clues and riddles.",
  },
  {
    id: 8,
    title: "DASTUR-E-MEHFIL",
    date: "2025-04-19",
    time: "1:30 PM",
    description:
      "Celebrate poetry and creativity in a multilingual contest.",
  },
  {
    id: 9,
    title: "FEETS ON FIRE",
    date: "2025-04-20",
    time: "5:30 PM",
    description:
      "Group dance competition that showcases rhythm and grace.",
  },
];

// Format date properly with suffix
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Add suffix for day
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
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

// Function to parse date and time together
const parseDateTime = (event) => {
  return new Date(`${event.date} ${event.time}`);
};

const Timeline = () => {
  return (
    <div className="updateTimeline-container">
      <h2 className="updateTimeline-title">Event Timeline</h2>
      <div className="timeline">
        {events
          .sort((a, b) => parseDateTime(a) - parseDateTime(b)) // Sort by date and time
          .map((event) => (
            <div key={event.id} className="updateTimeline-item">
              <div className="updateTimeline-date">
                {formatDate(event.date)} - {event.time}
              </div>
              <div className="updateTimeline-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Timeline;
