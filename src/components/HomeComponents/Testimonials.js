import React from "react";
import "../../styles/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dp from "../../assets/PNG/TestimonialDp.png"
// Event Highlights / Testimonials Data
const eventHighlights = [
  {
    title: "John Doe",
    description: "The event was a game-changer! I learned so much about AI and met amazing people.",
    img:dp,
  },
  {
    title: "Alice Smith",
    description: "Sankalan offered a perfect blend of knowledge, creativity, and networking.",
    img:dp,
  },
  {
    title: "Rahul Sharma",
    description: "The AI Hackathon pushed me beyond my limits and helped me innovate.",
    img:dp,
  },
];

const Testimonials = () => {
  return (
    <section className="ai-initiatives-section">
      <h2>
        Our <span>Testimonials</span>
      </h2>
      {/* Grid Layout for Testimonials */}
      <div className="event-highlights-grid">
        {eventHighlights.map((highlight, index) => (
          <div className="highlight-card" key={index}>
            <img
              src={highlight.img}
              alt={highlight.title}
              className="highlight-dp"
            />
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
