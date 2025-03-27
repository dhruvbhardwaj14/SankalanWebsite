import React from "react";
import "../../styles/MissionVision.css";
import vision from "../../assets/PNG/vision.png"
import mission from "../../assets/PNG/mission.png"
import waveVideo from "../../assets/Videos/visionMissionBg.mp4"
const MissionVision = () => {
  console.log(waveVideo);
  return (
    <section className="mission-vision">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={waveVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h2>Mission & Vision</h2>
      <div className="cards-container">
        {/* Mission Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={mission} alt="Mission" />
              <h3>Our Mission</h3>
            </div>
            <div className="flip-card-back">
              <p>
                Our mission is to celebrate creativity and ignite passion by offering 
                a vibrant platform where ideas flourish through events that entertain, educate, and empower.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={vision} alt="Vision" />
              <h3>Our Vision</h3>
            </div>
            <div className="flip-card-back">
              <p>
                Our vision is to be a pioneering festival that leaves an indelible mark on everyone who participates
                 and inspires individuals to push boundaries, discover new talents, and foster lifelong connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
