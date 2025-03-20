import React from "react";
import "../../styles/WhySankalan.css";
import comp from "../../assets/PNG/competitiveCoding.png"
import net from "../../assets/PNG/networking.png"
import workshop from "../../assets/PNG/workshop.png"
import aidata from "../../assets/PNG/AiData.png"
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
    img: aidata,
    title: "AI & Data Science Focus",
    desc: "Explore the latest trends and advancements in AI and Big Data.",
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
