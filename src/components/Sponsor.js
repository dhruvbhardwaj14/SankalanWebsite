import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 
import "../styles/Sponsors.css"; 
const Sponsor = () => {
  const sponsors = [
    { id: 1, name: "Company A", logo: "https://play-lh.googleusercontent.com/VCZKZgA_VP5PVHNCDJ3rWwtqDAuQwLKfuP0u5d9PiWef_IYhI176pRlXYLPmMlbpUlav=w480-h960-rw" },
    { id: 2, name: "Company B", logo: "/sponsors/c1.png" },
    { id: 3, name: "Company C", logo: "/sponsors/c2.png" },
    { id: 4, name: "Company D", logo: "/sponsors/c3.png" },
    { id: 5, name: "Company E", logo: "/sponsors/c4.png" },
    { id: 6, name: "Company F", logo: "https://play-lh.googleusercontent.com/VCZKZgA_VP5PVHNCDJ3rWwtqDAuQwLKfuP0u5d9PiWef_IYhI176pRlXYLPmMlbpUlav=w480-h960-rw" },
    { id: 7, name: "Company G", logo: "/sponsors/c1.png" },
    { id: 8, name: "Company H", logo: "/sponsors/c2.png" },
    { id: 9, name: "Company I", logo: "/sponsors/c3.png" },
    { id: 10, name: "Company J", logo: "/sponsors/c4.png" },
    { id: 11, name: "Company K", logo: "https://play-lh.googleusercontent.com/VCZKZgA_VP5PVHNCDJ3rWwtqDAuQwLKfuP0u5d9PiWef_IYhI176pRlXYLPmMlbpUlav=w480-h960-rw" },
    { id: 12, name: "Company L", logo: "/sponsors/c1.png" },
    { id: 13, name: "Company M", logo: "/sponsors/c2.png" },
    { id: 14, name: "Company N", logo: "/sponsors/c3.png" },
    { id: 15, name: "Company O", logo: "/sponsors/c4.png" },
    { id: 16, name: "Company P", logo: "https://play-lh.googleusercontent.com/VCZKZgA_VP5PVHNCDJ3rWwtqDAuQwLKfuP0u5d9PiWef_IYhI176pRlXYLPmMlbpUlav=w480-h960-rw" },
    { id: 17, name: "Company Q", logo: "/sponsors/c1.png" },
    { id: 18, name: "Company R", logo: "/sponsors/c2.png" },
    { id: 19, name: "Company S", logo: "/sponsors/c3.png" },
    { id: 20, name: "Company T", logo: "/sponsors/c4.png" },
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