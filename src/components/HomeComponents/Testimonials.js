import React from "react";
import "../../styles/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agam from "../../assets/PNG/Agam.png"
import Ashutosh from "../../assets/PNG/Ashutosh.png"
import Khushi from "../../assets/PNG/Khushi.png"
import Krishna from "../../assets/PNG/Krishna.png"
// Event Highlights / Testimonials Data
const eventHighlights = [
  {
    title: "Krishna Kumar",
    description: "The event was incredibly well-organized! The speakers were insightful, and I walked away with valuable knowledge and new connections. Also, the Blind Coding activity was interesting—it was great to discover that I am good at typing code!",
    img:Krishna,
  },
  {
    title: "Agam Gupta",
    description: "Sankalan 2024, the annual tech fest of the Department of Computer Science, DU, was an incredible experience! I am proud to have won three events, each challenging my technical skills and creativity. The event fostered innovation, collaboration, and a spirit of healthy competition.",
    img:agam,
  },
  {
    title: "Ashutosh Prajapati",
    description: "It was a great experience attending SANKALAN and also winning an event, everything was handled professionally. It was quite competitive as students from every college of Delhi attended the event. Overall it was a fun and knowledgeable experience.",
    img:Ashutosh,
  },
  // {
  //   title: "Khushi Jain",
  //   description: "Participating in the Artisan Valley - Art and Painting event at SANKALAN was an incredible experience. The event was well-organized, and everything was handled professionally. Winning first prize was truly rewarding, but more than that, I enjoyed the creative atmosphere and the opportunity to learn from fellow artists. It was a fun and enriching experience that I will always cherish.",
  //   img:Khushi,
  // },
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
