import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faChevronDown, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Team.css";

// Team leads and event heads
import dhruvB from "../assets/PNG/dhruvB.webp"
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
import harshaV from "../assets/PNG/harshaV.webp"
import shivamY from "../assets/PNG/shivamY.webp"
import sandeep from "../assets/PNG/sandeep.webp"
// Organising Committe
import gajender from "../assets/PNG/gajender.webp"
import chetan from "../assets/PNG/chetan.webp"
import pushpender from "../assets/PNG/pushpender.webp"
import rohan from '../assets/PNG/rohan.webp'
import harshY from "../assets/PNG/harshY.webp"
import abhishekS from "../assets/PNG/abhishekS.webp"
import vinayakB from "../assets/PNG/vinayakB.webp"
// Admin and DUCSS panel
import abhishek from "../assets/PNG/abhishek.webp"
import ompal from "../assets/PNG/ompal.webp"
import deepakJ from "../assets/PNG/deepakJ.webp"
import pardeep from "../assets/PNG/pardeep.webp"
const teamCategories = ["Team/Event Heads", "Administrative and DUCSS Panel"];

const teamMembers = {
  "Team/Event Heads": [
    {
      name: "Dhruv Bhardwaj",
      role: "Head of Website Team",
      img: dhruvB,
      linkedin: "https://www.linkedin.com/in/technodb/",
      github: "https://github.com/dhruvbhardwaj14",
    },
    {
      name: "Aditi Sharma",
      role: "Head of Design Team and Feet On Fire",
      img: aditiS,
      linkedin: "https://www.linkedin.com/in/aditi-sharma-1b2861209/",
      email: "aditi28217@gmail.com",
    },
    {
      name: "Sankalp Tiwari",
      role: "Head of Design Team",
      img: sankalpT,
      linkedin: "https://www.linkedin.com/in/sankalp-tiwari-a276921a1/",
      email: "sankalpmca24@cs.du.ac.in",
    },
    {
      name: "Nishant Sharma",
      role: "Head of Design Team",
      img: nishantS,
      linkedin: "https://www.linkedin.com/in/sharmanishant731/",
      github: "https://github.com/sharmanishant731",
    },
    {
      name: "Nikita Singh",
      role: "Head of Content Team",
      img: nikitaS,
      linkedin: "https://www.linkedin.com/in/nikita-singh-5527a2313/",
      email: "nikitamsc24@cs.du.ac.in",
    },
    {
      name: "Chetan Verma",
      role: "Head of Content Team",
      img: chetan,
      linkedin: "#",
      email: "chetanvmsc23@cs.du.ac.in",
    },
    {
      name: "Rohan",
      role: "Head of Content and Decor Team",
      img: rohan,
      linkedin: "https://www.linkedin.com/in/rohankumar141414/",
      email: "rohankmsc23@cs.du.ac.in",
    },
    {
      name: "Pratibha Singh Chandel",
      role: "Head of Decor Team",
      img: pratibhaS,
      linkedin: "https://www.linkedin.com/in/pratibha-singh-chandel-ab0a00169/",
      github: "https://github.com/pratibhasc",
    },
    {
      name: "Deepak Goyal",
      role: "Head of Sponsorship Team and Code Auction",
      img: deepakG,
      linkedin: "https://www.linkedin.com/in/deepak-goyal-15a085224/",
      email: "deepakmca24@cs.du.ac.in",
    },
    {
      name: "Ashutosh Prajapati",
      role: "Head of Sponsorship Team and Code Auction ",
      img: ashutoshP,
      linkedin: "https://www.linkedin.com/in/ashutosh-prajapati15/",
      github: "https://github.com/prajapatiAshutosh",
    },
    {
      name: "Amit Kumar",
      role: "Head of Promotions Team",
      img: amitK,
      linkedin: "https://www.linkedin.com/in/amit-kumar-b4a977246/",
      github: "https://github.com/amitgupta141",
    },
    {
      name: "Harsha Vardhan",
      role: "Head of Social Media Team",
      img: harshaV,
      linkedin: "https://www.linkedin.com/in/vantaku-harsha-vardhan-naidu-296295212/",
      email: "Harsha.vantaku9440@gmai.com"
    },
    {
      name: "Nasreen Parween",
      role: "Head of HackDUCS",
      img: nasreenP,
      linkedin: "https://www.linkedin.com/in/nasreen-parween-758959235",
      github: "https://github.com/NasreenParween",
    },
    {
      name: "Yash Dabral",
      role: "Head of HackDUCS",
      img: yashD,
      linkedin: "https://www.linkedin.com/in/yash-dabral-1b2583227/",
      github: "https://github.com/yashDabral01",
    },
    {
      name: "Mayank Sharma",
      role: "Head of Algoholics",
      img: mayankS,
      linkedin: "https://www.linkedin.com/in/mayank-sharma-18feb2003",
      github: "https://GitHub.com/maydev18",
    },
    {
      name: "Girish Goyal",
      role: "Head of Blind Coding",
      img: girishG,
      linkedin: "https://www.linkedin.com/in/girish-goyal-653b21226/",
      email: "girishmkmca24@cs.du.ac.in",
    },
    {
      name: "Aryan Thapliyal",
      role: "Head of Squash The Bugs",
      img: aryanT,
      linkedin: "https://www.linkedin.com/in/aryan-thapliyal-912094144/",
      github: "https://github.com/Saint-Potato",
    },
    {
      name: "Krishna Kumar",
      role: "Head of Over Torque",
      img: krishnaK,
      linkedin: "https://www.linkedin.com/in/krishna-kumar-549894219/",
      github: "https://github.com/krrishcoder",
    },
    {
      name: "Prachi Bhatia",
      role: "Head of Over Torque",
      img: prachiB,
      linkedin: "https://linkedin.com/in/prachi-bhatia-aa7448201/",
      email: "prachimsc24@cs.du.ac.in",
    },
    {
      name: "Varsha Saini",
      role: "Head of Chakravyuh",
      img: varshaS,
      linkedin: "https://www.linkedin.com/in/varsha-saini-440b74232/",
      github: "https://github.com/Varsha-Saini",
    },
    {
      name: "Vani Tyagi",
      role: "Head of Chakravyuh",
      img: vaniT,
      linkedin: "https://www.linkedin.com/in/vani-tyagi-b5a769282/",
      github: "https://github.com/Vanityagi2504",
    },
    {
      name: "Shivam Yadav",
      role: "Head of Dastur-e-mehfil",
      img: shivamY,
      linkedin: "https://www.linkedin.com/in/shivam-yadav-403656210/",
      github: "https://github.com/shivam5167",
    },
    {
      name: "P Sandeep ",
      role: "Head of Dastur-e-mehfil",
      img: sandeep,
      linkedin: "https://www.linkedin.com/in/sandeep-pradeep-26138b215/",
      email: "sandeep.pradeep100@gmail.com",
    },
  ],
  "Administrative and DUCSS Panel": [
  {
    name: "Dr. Om Pal",
    role: "Faculty Advisor, DUCSS",
    img: ompal,
    linkedin: "https://www.linkedin.com/in/om-pal-0b0b05322/",
    email: "opal@cs.du.ac.in",
  },
  {
    name: "Abhishek Mahar",
    role: "Coordinator, DUCSS",
    img: abhishek,
    linkedin: "https://bit.ly/41WTyyZ",
    email: "abhishekmmsc23@cs.du.ac.in",
  },
  
  {
    name: "Pardeep Singh",
    role: "PHD Coordinator, DUCSS",
    img: pardeep,
    linkedin: "https://bit.ly/4ixKS9g",
    email: "psingh@cs.du.ac.in",
  },
  {
    name: "Pushpender Singh Meena",
    role: "Co-Coordinator, DUCSS",
    img: pushpender,
    linkedin: "#",
    email: "pushpendersmsc23@cs.du.ac.in",
  },
  {
    name: "Deepak Jangir",
    role: "Treasurer,  DUCSS",
    img: deepakJ,
    linkedin: "http://bit.ly/4kRbh3n",
    email: "deepakjmsc24@cs.du.ac.in",
  },
],

};


const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("Team/Event Heads");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedMember = teamMembers[selectedCategory][selectedIndex];

  useEffect(() => {
    const selectedElement = document.querySelector(".team-member.selected");
    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);
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

  // Mouse Scroll Event
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  // Touch Swipe Events
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY;
    const diff = touchStartY - touchEndY;

    if (diff > 30) {
      handleNext();
    } else if (diff < -30) {
      handlePrev();
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, [selectedCategory, selectedIndex]);

  return (
    <div className="team-container">
      {/* Header */}
      <div className="teamParallax">
        <div className="team-header">
          <h1 className="team-title">
            OUR TEAM
            <span className="team-icon">
              <FontAwesomeIcon icon={faUsers} />
            </span>
          </h1>
        </div>
  
        {/* Mobile-First Categories - Slider on Top */}
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
  
        {/* === Updated Mobile Grid Section === */}
        <div className="team-grid">
          {teamMembers[selectedCategory].map((member, index) => (
            <div key={index} className="team-card-grid">
              <img src={member.img} alt={member.name} className="team-img-grid" />
              <div className="team-info-grid">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-socials-grid">
                  {/* LinkedIn Icon */}
                  {member.linkedin && member.linkedin !== "#" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}

                  {/* GitHub or Email Icon */}
                  {member.github && member.github !== "#" ? (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  ) : member.email && member.email !== "#" ? (
                    <a href={`mailto:${member.email}`}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* === Original Content for Larger Screens === */}
        <div className="team-content">
          {/* Left Section Hidden in Mobile */}
          {/* === Left Section with Scroll for > 10 Members === */}
          <div className="team-left">
            <div
              className="team-list"
              style={{
                maxHeight: teamMembers[selectedCategory].length > 10 ? "500px" : "auto",
                overflowY: teamMembers[selectedCategory].length > 10 ? "auto" : "visible",
              }}
            >
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
  
          {/* Right Section - Carousel for Larger Screens */}
          <div
            className="team-right"
            onWheel={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            ref={carouselRef}
          >
            <div className="carousel-controls">
              <FontAwesomeIcon icon={faChevronUp} onClick={handlePrev} className="arrow up" />
            </div>
  
            <div className="team-card slide-up">
              <img src={selectedMember.img} alt={selectedMember.name} className="team-img" />
              <div className="team-info">
                <h3>{selectedMember.name}</h3>
                <p>{selectedMember.role}</p>
                <div className="team-socials">
                  {/* LinkedIn Icon */}
                  {selectedMember.linkedin && selectedMember.linkedin !== "#" && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}

                  {/* GitHub or Email Icon */}
                  {selectedMember.github && selectedMember.github !== "#" ? (
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  ) : selectedMember.email && selectedMember.email !== "#" ? (
                    <a href={`mailto:${selectedMember.email}`}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  ) : null}

                </div>
              </div>
            </div>
  
            <div className="carousel-controls">
              <FontAwesomeIcon icon={faChevronDown} onClick={handleNext} className="arrow down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Team;
