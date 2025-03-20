import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 
import "../styles/Sponsors.css"; 
import c1 from "../assets/PNG/c1.png"
import c2 from "../assets/PNG/c2.png"
import c3 from "../assets/PNG/c3.png"
import c4 from "../assets/PNG/c4.png"
const Sponsor = () => {
  const sponsors = [
    { id: 1, name: "Company A", logo: c1 },
    { id: 2, name: "Company B", logo: c1 },
    { id: 3, name: "Company C", logo:c2 },
    { id: 4, name: "Company D", logo: c3 },
    { id: 5, name: "Company E", logo:c4 },
    { id: 6, name: "Company F", logo: c1 },
    { id: 7, name: "Company G", logo: c1 },
    { id: 8, name: "Company H", logo:c2 },
    { id: 9, name: "Company I", logo: c3 },
    { id: 10, name: "Company J", logo:c4 },
    { id: 11, name: "Company K", logo: c1 },
    { id: 12, name: "Company L", logo: c1 },
    { id: 13, name: "Company M", logo:c2 },
    { id: 14, name: "Company N", logo: c3 },
    { id: 15, name: "Company O", logo:c4 },
    { id: 16, name: "Company P", logo: c1 },
    { id: 17, name: "Company Q", logo: c1 },
    { id: 18, name: "Company R", logo:c2 },
    { id: 19, name: "Company S", logo: c3 },
    { id: 20, name: "Company T", logo:c4 },
  ];
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
                <div key={sponsor.id} className="sponsor-card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                  <p>{sponsor.name}</p>
                </div>
              ))}
        </div>
</div>
</div>
</div>
  );
};
export default Sponsor;