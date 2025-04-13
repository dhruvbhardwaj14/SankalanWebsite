import React from "react";
import "../../styles/WhySankalan.css";
import comp from "../../assets/PNG/competitiveCoding.webp"
import net from "../../assets/PNG/networking.webp"
import workshop from "../../assets/PNG/workshop.webp"
import explore from "../../assets/PNG/explore.webp"
const uspData = [
  {
    img: comp,
    title: "Competitive Coding",
    desc: "Engage in thrilling coding competitions designed to challenge your problem-solving abilities.",
  },
  {
    img: workshop,
    title: "Workshops & Seminars",
    desc: "Gain insights from industry experts and broaden your horizons with cutting-edge knowledge.",
  },
  {
    img: net,
    title: "Networking Opportunities",
    desc: "Connect with like-minded peers and esteemed professionals from across the industry.",
  },
  {
    img: explore,
    title: "Express. Explore. Evolve.",
    desc: "An inspiring platform for dreamers, doers, and designers to showcase their talents.",
  },
];

const WhySankalan = () => {
  return (
    <section className="why-sankalan">
      <h2>Why <span>Sankalan?</span></h2>
      <div className="usp-grid">
        {uspData.map((item, index) => (
          <div className="usp-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySankalan;
