import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faChevronDown, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Team.css";
import { teamMembers, teamCategories } from "../data/teamData";

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState(teamCategories[0]);
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

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers[selectedCategory].length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex === teamMembers[selectedCategory].length - 1 ? 0 : prevIndex + 1
    );
  }, [selectedCategory]);
  

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

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

  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, [handleNext]);
  return (
    <div className="team-container">
      <div className="teamParallax">
        <div className="team-header">
          <h1 className="team-title">
            OUR TEAM
            <span className="team-icon">
              <FontAwesomeIcon icon={faUsers} />
            </span>
          </h1>
        </div>

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

        <div className="team-grid">
          {teamMembers[selectedCategory].map((member, index) => (
            <div key={index} className="team-card-grid">
              <img src={member.img} alt={member.name} className="team-img-grid" />
              <div className="team-info-grid">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-socials-grid">
                  {member.linkedin && member.linkedin !== "#" && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {member.github && member.github !== "#" ? (
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
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

        <div className="team-content">
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
                  {selectedMember.linkedin && selectedMember.linkedin !== "#" && (
                    <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {selectedMember.github && selectedMember.github !== "#" ? (
                    <a href={selectedMember.github} target="_blank" rel="noopener noreferrer">
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