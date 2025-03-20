import React from "react";
import "../../styles/Timeline.css";

const events = [
  {
    id: 1,
    title: "Hackathon 2025",
    date: "2025-04-10",
    description: "A 24-hour coding marathon with exciting challenges and cash prizes.",
  },
  {
    id: 2,
    title: "AI Workshop",
    date: "2025-04-20",
    description: "Explore AI techniques and hands-on machine learning models.",
  },
  {
    id: 3,
    title: "Guest Lecture by OpenAI",
    date: "2025-05-05",
    description: "An exclusive lecture on the future of AI by an OpenAI expert.",
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
        {events.map((event) => (
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
