import React from "react";
import "../../styles/Timeline.css";

const events = [
  {
    id: 1,
    title: "HACKDUCS",
    date: "2025-04-19",
    description:
      "A 24-hour coding marathon with exciting challenges and cash prizes.",
  },
  {
    id: 2,
    title: "BLIND CODING",
    date: "2025-04-20",
    description:
      "Code without seeing the screen, testing your memory and logic.",
  },
  {
    id: 3,
    title: "SQUASH THE BUGS",
    date: "2025-04-20",
    description: "Hunt down errors and fix bugs quickly to win!",
  },
  {
    id: 4,
    title: "CODE AUCTION",
    date: "2025-04-20",
    description:
      "Blend of strategy and coding with competitive bidding.",
  },
  {
    id: 5,
    title: "ALGOHOLICS",
    date: "2025-04-19",
    description:
      "Test your algorithmic problem-solving with complex puzzles.",
  },
  {
    id: 6,
    title: "OVER TORQUE",
    date: "2025-04-20",
    description:
      "Build and race your wireless bot through a challenging obstacle course!",
  },
  {
    id: 7,
    title: "CHAKRAVYUH",
    date: "2025-04-19",
    description:
      "A thrilling treasure hunt filled with cryptic clues and riddles.",
  },
  {
    id: 8,
    title: "DASTUR-E-MEHFIL",
    date: "2025-04-19",
    description:
      "Celebrate poetry and creativity in a multilingual contest.",
  },
  {
    id: 9,
    title: "FEETS ON FIRE ",
    date: "2025-04-20",
    description:
      "Group dance competition that showcases rhythm and grace.",
  },
];

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
const Timeline = () => {
  return (
    <div className="updateTimeline-container">
    <h2 className="updateTimeline-title">Event Timeline</h2>
    <div className="timeline">
      {events
        .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort events by date
        .map((event) => (
          <div key={event.id} className="updateTimeline-item">
            <div className="updateTimeline-date">{formatDate(event.date)}</div>
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
