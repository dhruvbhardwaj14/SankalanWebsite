import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,  faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faChevronDown, faUsers, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import "../styles/Team.css";

// Import Images - Replace with actual import paths
import krishnaK from "../assets/PNG/krishnaK.webp";
import vaniT from "../assets/PNG/vaniT.webp";
import girishG from "../assets/PNG/girishG.webp";
import nasreenP from "../assets/PNG/nasreenP.webp";
import sankalpT from "../assets/PNG/sankalpT.webp";
import mayankS from "../assets/PNG/mayankS.webp";
import yashD from "../assets/PNG/yashD.webp";
import amitK from "../assets/PNG/amitK.webp";
import pratibhaS from "../assets/PNG/pratibhaS.webp";
import ashutoshP from "../assets/PNG/ashutoshP.webp";
import nikitaS from "../assets/PNG/nikitaS.webp";
import varshaS from "../assets/PNG/varshaS.webp";
import aditiS from "../assets/PNG/aditiS.webp";
import prachiB from "../assets/PNG/prachiB.webp";
import deepakG from "../assets/PNG/deepakG.webp";
import aryanT from "../assets/PNG/aryanT.webp";
import nishantS from "../assets/PNG/nishantS.webp";

// Updated Categories
const teamCategories = ["Team/Event Heads"];

// Updated Team Data
const teamMembers = {
  "Team/Event Heads": [
    {
      name: "Krishna Kumar",
      role: "Over Torque (Robo Race)",
      img: krishnaK,
      linkedin: "https://www.linkedin.com/in/krishna-kumar-549894219/",
      github: "https://github.com/krrishcoder",
    },
    {
      name: "Vani Tyagi",
      role: "Treasure Hunt",
      img: vaniT,
      linkedin: "https://www.linkedin.com/in/vani-tyagi-b5a769282/",
      github: "https://github.com/Vanityagi2504",
    },
    {
      name: "Girish Goyal",
      role: "Blind Code",
      img: girishG,
      linkedin: "https://www.linkedin.com/in/girish-goyal-653b21226/",
      email: "girishmkmca24@cs.du.ac.in",
    },
    {
      name: "Nasreen Parween",
      role: "HackDUCS",
      img: nasreenP,
      linkedin: "https://www.linkedin.com/in/nasreen-parween-758959235",
      github: "https://github.com/NasreenParween",
    },
    {
      name: "Sankalp Tiwari",
      role: "Designer",
      img: sankalpT,
      linkedin: "https://www.linkedin.com/in/sankalp-tiwari-a276921a1/",
      email: "sankalpmca24@cs.du.ac.in",
    },
    {
      name: "Mayank Sharma",
      role: "Algolholics",
      img: mayankS,
      linkedin: "https://www.linkedin.com/in/mayank-sharma-18feb2003",
      github: "https://GitHub.com/maydev18",
    },
    {
      name: "Yash Dabral",
      role: "HackDUCS",
      img: yashD,
      linkedin: "https://www.linkedin.com/in/yash-dabral-1b2583227/",
      github: "https://github.com/yashDabral01",
    },
    {
      name: "Amit Kumar",
      role: "Chakravyuh (Treasure Hunt)",
      img: amitK,
      linkedin: "https://www.linkedin.com/in/amit-kumar-b4a977246/",
      github: "https://github.com/amitgupta141",
    },
    {
      name: "Pratibha Singh Chandel",
      role: "Decoration Team",
      img: pratibhaS,
      linkedin: "https://www.linkedin.com/in/pratibha-singh-chandel-ab0a00169/",
      github: "https://github.com/pratibhasc",
    },
    {
      name: "Ashutosh Prajapati",
      role: "Code Auction and Sponsor Team",
      img: ashutoshP,
      linkedin: "https://www.linkedin.com/in/ashutosh-prajapati15/",
      github: "https://github.com/prajapatiAshutosh",
    },
    {
      name: "Nikita Singh",
      role: "Designer",
      img: nikitaS,
      linkedin: "https://www.linkedin.com/in/nikita-singh-5527a2313/",
      email: "nikitamsc24@cs.du.ac.in",
    },
    {
      name: "Varsha Saini",
      role: "Chakravyuh",
      img: varshaS,
      linkedin: "https://www.linkedin.com/in/varsha-saini-440b74232/",
      github: "https://github.com/Varsha-Saini",
    },
    {
      name: "Aditi Sharma",
      role: "Feets on Fire",
      img: aditiS,
      linkedin: "https://www.linkedin.com/in/aditi-sharma-1b2861209/",
      email: "aditimsc24@cs.du.ac.in",
    },
    {
      name: "Prachi Bhatia",
      role: "Over Torque - Robo Race",
      img: prachiB,
      linkedin: "https://linkedin.com/in/prachi-bhatia-aa7448201/",
      email: "prachimsc24@cs.du.ac.in",
    },
    {
      name: "Deepak Goyal",
      role: "Code Auction",
      img: deepakG,
      linkedin: "https://www.linkedin.com/in/deepak-goyal-15a085224/",
      email: "deepakmca24@cs.du.ac.in",
    },
    {
      name: "Aryan Thapliyal",
      role: "Squash The Bugs",
      img: aryanT,
      linkedin: "https://www.linkedin.com/in/aryan-thapliyal-912094144/",
      github: "https://github.com/Saint-Potato",
    },
    {
      name: "Nishant Sharma",
      role: "Designer",
      img: nishantS,
      linkedin: "https://www.linkedin.com/in/sharmanishant731/",
      github: "https://github.com/sharmanishant731",
    },
  ],
};

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("Team/Event Heads");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedMember = teamMembers[selectedCategory][selectedIndex];

  const carouselRef = useRef(null);
  let touchStartY = 0;

  // Scroll Up
  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers[selectedCategory].length - 1 : prevIndex - 1
    );
  };

  // Scroll Down
  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === teamMembers[selectedCategory].length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, [selectedCategory, selectedIndex]);

  return (
    <div className="team-container">
      <div className="team-header">
        <h1 className="team-title">
          OUR TEAM
          <span className="team-icon">
            <FontAwesomeIcon icon={faUsers} />
          </span>
        </h1>
      </div>

      {/* Category Section */}
      <div className="team-categories">
        {teamCategories.map((category) => (
          <div
            key={category}
            className={`category ${selectedCategory === category ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedIndex(0);
            }}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="team-content">
        <div className="team-left">
          <div className="team-list">
            {teamMembers[selectedCategory].map((member, index) => (
              <div
                key={index}
                className={`team-member ${selectedIndex === index ? "selected" : ""}`}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {member.name}
              </div>
            ))}
          </div>
        </div>

        <div className="team-right" ref={carouselRef}>
          <div className="carousel-controls">
            <FontAwesomeIcon icon={faChevronUp} onClick={handlePrev} className="arrow up" />
          </div>

          <div className="team-card slide-up">
            <img src={selectedMember.img} alt={selectedMember.name} className="team-img" />
            <div className="team-info">
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.role}</p>
              <div className="team-socials">
                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={selectedMember.github || `mailto:${selectedMember.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={selectedMember.github ? faGithub : faEnvelopeOpen} />
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <FontAwesomeIcon icon={faChevronDown} onClick={handleNext} className="arrow down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
// 