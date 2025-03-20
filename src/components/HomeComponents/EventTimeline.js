import React from "react";
import "../../styles/EventTimeline.css";
const timelineEvents = [
  {
    year: "2005",
    title: "Inception of Sankalan",
    description: "Sankalan began as a small coding fest with a vision to empower tech enthusiasts.",
  },
  {
    year: "2012",
    title: "Introduction of AI and Big Data",
    description: "Expanded into AI and Big Data domains, attracting national-level participants.",
  },
  {
    year: "2017",
    title: "Collaborations with Industry Leaders",
    description: "Partnered with top tech companies to provide mentorship and internships.",
  },
  {
    year: "2022",
    title: "Going Virtual During the Pandemic",
    description: "Sankalan adapted to a virtual platform, enabling global participation.",
  },
  {
    year: "2025",
    title: "Sankalan 20th Edition",
    description: "Celebrating 20 years of tech brilliance, expanding into AR/VR domains.",
  },
];

const EventTimeline = () => {
  return (
    <section className="timeline-section">
      <h2>Sankalan <span>Timeline</span></h2>
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}
          >
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventTimeline;
