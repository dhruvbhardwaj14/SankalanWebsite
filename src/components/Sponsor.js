import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css";
import "../styles/Sponsors.css";
import { sponsors } from "../data/sponsorData";

const Sponsor = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="sponsors-container">
          <div className="sponsors-header">
            <h1 className="sponsors-title">
              SPONSORS
              <span className="sponsor-icon">
                <FontAwesomeIcon icon={faHandsHelping} />
              </span>
            </h1>
          </div>
          <div className="sponsors-grid">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-card"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                <p>{sponsor.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
