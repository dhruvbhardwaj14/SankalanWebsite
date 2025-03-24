import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 
import "../styles/Sponsors.css"; 
import acme from "../assets/PNG/acme.png"
import axure from "../assets/PNG/axure.png"
import ccd from "../assets/PNG/ccd.png"
import ciena from "../assets/PNG/ciena.png"
import cocacola from "../assets/PNG/cocacola.png"
import codingblocks from "../assets/PNG/codingblocks.png"
import codingninjas from "../assets/PNG/codingninjas.png"
import codingminutes from "../assets/PNG/codingminutes.png"
import devfolio from "../assets/PNG/devfolio.png"
import drdo from "../assets/PNG/drdo.png"
import duupdate from "../assets/PNG/duupdate.png"
import dubeats from "../assets/PNG/dubeats.png"
import duclub from "../assets/PNG/duclub.png"
import ducomp from "../assets/PNG/ducomp.png"
import duexpress from "../assets/PNG/duexpress.png"
import dufest from "../assets/PNG/dufest.png"
import duind from "../assets/PNG/duind.png"
import duvibes from "../assets/PNG/duvibes.png"
import echo3d from "../assets/PNG/echo3d.png"
import ethindia from "../assets/PNG/ethindia.png"
import finalrevise from "../assets/PNG/finalrevise.png"
import giga from "../assets/PNG/giga.png"
import intcake from "../assets/PNG/intcake.png"
import insightone from "../assets/PNG/insightone.png"
import lenskart from "../assets/PNG/lenskart.png"
import polygon from "../assets/PNG/polygon.png"
import redfm from "../assets/PNG/redfm.png"
import sportsun from "../assets/PNG/sportsun.png"
import starbucks from "../assets/PNG/starbucks.png"
import theeducationtree from "../assets/PNG/theeducationtree.png"
import wolfram from "../assets/PNG/wolfram.png"
import xyz from "../assets/PNG/xyz.png"
import youth from "../assets/PNG/youth.png"
import zebronics from "../assets/PNG/zebronics.png"
const Sponsor = () => {
  const sponsors = [
    { id: 1, name: "Acme Academy", logo: acme },
    { id: 2, name: "Axure", logo: axure },
    { id: 3, name: "Cafe Coffee Day", logo: ccd },
    { id: 4, name: "Ciena", logo: ciena },
    { id: 5, name: "Coca-Cola", logo: cocacola },
    { id: 6, name: "Coding Blocks", logo: codingblocks },
    { id: 7, name: "Coding Ninjas", logo: codingninjas },
    { id: 8, name: "Coding Minutes", logo: codingminutes },
    { id: 9, name: "Devfolio", logo: devfolio },
    { id: 10, name: "DRDO", logo: drdo },
    { id: 11, name: "DU Updates", logo: duupdate },
    { id: 12, name: "DU Beats", logo: dubeats },
    { id: 13, name: "Delhi University Club", logo: duclub },
    { id: 14, name: "DU Express", logo: duexpress },
    { id: 15, name: "DU Fest", logo: dufest },
    { id: 16, name: "DU India", logo: duind },
    { id: 17, name: "DU Vibes", logo: duvibes },
    { id: 18, name: "Echo3D", logo: echo3d },
    { id: 19, name: "ETH India", logo: ethindia },
    { id: 20, name: "Final Revise", logo: finalrevise },
    { id: 21, name: "GigaByte", logo: giga },
    { id: 22, name: "Interview cake", logo: intcake },
    { id: 23, name: "Insight One", logo: insightone },
    { id: 24, name: "Lenskart", logo: lenskart },
    { id: 25, name: "Polygon", logo: polygon },
    { id: 26, name: "Red FM India", logo: redfm },
    { id: 27, name: "Sportsun", logo: sportsun },
    { id: 28, name: "Starbucks", logo: starbucks },
    { id: 29, name: "The Education Tree", logo: theeducationtree },
    { id: 30, name: "Wolfram", logo: wolfram },
    { id: 31, name: ".XYZ", logo: xyz },
    { id: 32, name: "Youth India", logo: youth },
    { id: 33, name: "Zebronics", logo: zebronics },
    { id: 34, name: "Du Competitions", logo: ducomp },
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