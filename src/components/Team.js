import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faChevronDown, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../styles/Team.css";

const teamCategories = ["Developers", "Designers", "Administrative"];

const teamMembers = {
  Developers: [
    { name: "Alice Johnson", role: "Frontend Developer", img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Bob Williams", role: "Backend Developer", img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Charlie Davis", role: "Full Stack Developer", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Daniel Lee", role: "Mobile App Developer", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Eleanor Carter", role: "React Developer", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg", linkedin: "#", github: "#", twitter: "#" },
    
  ],
  Designers: [
    { name: "Jane Smith", role: "UI/UX Designer", img: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Kevin Brooks", role: "Graphic Designer", img: "https://images.pexels.com/photos/322887/pexels-photo-322887.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Laura Green", role: "Motion Graphics Designer", img: "https://images.pexels.com/photos/20787/pexels-photo.jpg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Mike Adams", role: "Illustrator", img: "https://images.pexels.com/photos/3255762/pexels-photo-3255762.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Nancy White", role: "Brand Designer", img: "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg", linkedin: "#", github: "#", twitter: "#" },
  ],
  Administrative: [
    { name: "John Doe", role: "Project Manager", img: "https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Michael Brown", role: "DevOps Engineer", img: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Sophia Martinez", role: "Scrum Master", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Ethan Thompson", role: "Software Architect", img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg", linkedin: "#", github: "#", twitter: "#" },
    { name: "Lucas White", role: "Security Analyst", img: "https://images.pexels.com/photos/7357/startup-photos.jpg", linkedin: "#", github: "#", twitter: "#" },
  ],
};


const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("Developers");
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
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* === Original Content for Larger Screens === */}
        <div className="team-content">
          {/* Left Section Hidden in Mobile */}
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
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href={selectedMember.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={selectedMember.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
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
    </div>
  );
  
};

export default Team;
