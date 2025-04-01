import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css"; 
import "../styles/Sponsors.css"; 
import acme from "../assets/PNG/acme.webp";
import axure from "../assets/PNG/axure.webp";
import ccd from "../assets/PNG/ccd.webp";
import ciena from "../assets/PNG/ciena.webp";
import cocacola from "../assets/PNG/cocacola.webp";
import codingblocks from "../assets/PNG/codingblocks.webp";
import codingninjas from "../assets/PNG/codingninjas.webp";
import codingminutes from "../assets/PNG/codingminutes.webp";
import devfolio from "../assets/PNG/devfolio.webp";
import drdo from "../assets/PNG/drdo.webp";
import duupdate from "../assets/PNG/duupdate.webp";
import dubeats from "../assets/PNG/dubeats.webp";
import duclub from "../assets/PNG/duclub.webp";
import ducomp from "../assets/PNG/ducomp.webp";
import duexpress from "../assets/PNG/duexpress.webp";
import dufest from "../assets/PNG/dufest.webp";
import duind from "../assets/PNG/duind.webp";
import duvibes from "../assets/PNG/duvibes.webp";
import echo3d from "../assets/PNG/echo3d.webp";
import ethindia from "../assets/PNG/ethindia.webp";
import finalrevise from "../assets/PNG/finalrevise.webp";
import giga from "../assets/PNG/giga.webp";
import intcake from "../assets/PNG/intcake.webp";
import intBuddy from "../assets/PNG/intBuddy.webp";
import insightone from "../assets/PNG/insightone.webp";
import lenskart from "../assets/PNG/lenskart.webp";
import polygon from "../assets/PNG/polygon.webp";
import redfm from "../assets/PNG/redfm.webp";
import sportsun from "../assets/PNG/sportsun.webp";
import starbucks from "../assets/PNG/starbucks.webp";
import theeducationtree from "../assets/PNG/theeducationtree.webp";
import wolfram from "../assets/PNG/wolfram.webp";
import xyz from "../assets/PNG/xyz.webp";
import youth from "../assets/PNG/youth.webp";
import zebronics from "../assets/PNG/zebronics.webp";

const Sponsor = () => {
  const sponsors = [
    { id: 1, name: ".XYZ", logo: xyz, link: "https://gen.xyz/" },
    { id: 2, name: "Interview Cake", logo: intcake, link: "https://www.interviewcake.com/" },
    { id: 3, name: "Interview Buddy", logo: intBuddy, link: "https://interviewbuddy.net/" },
    { id: 4, name: "Acme Academy", logo: acme, link: "#" },
    { id: 5, name: "Axure", logo: axure, link: "https://www.axure.com/" },
    { id: 6, name: "Cafe Coffee Day", logo: ccd, link: "https://www.cafecoffeeday.com/" },
    { id: 7, name: "Ciena", logo: ciena, link: "https://www.ciena.com/" },
    { id: 8, name: "Coca-Cola", logo: cocacola, link: "https://www.coca-cola.com/" },
    { id: 9, name: "Coding Blocks", logo: codingblocks, link: "https://codingblocks.com/" },
    { id: 10, name: "Coding Ninjas", logo: codingninjas, link: "https://www.codingninjas.com/" },
    { id: 11, name: "Coding Minutes", logo: codingminutes, link: "https://www.codingminutes.com/" },
    { id: 12, name: "Devfolio", logo: devfolio, link: "https://devfolio.co/" },
    { id: 13, name: "DRDO", logo: drdo, link: "https://www.drdo.gov.in/" },
    { id: 14, name: "DU Updates", logo: duupdate, link: "https://www.duupdates.in/" },
    { id: 15, name: "DU Beats", logo: dubeats, link: "https://www.dubeat.com/" },
    { id: 16, name: "Delhi University Club", logo: duclub, link: "#" },
    { id: 17, name: "DU Express", logo: duexpress, link: "https://duexpress.in/" },
    { id: 18, name: "DU Fest", logo: dufest, link: "#" },
    { id: 19, name: "DU India", logo: duind, link: "#" },
    { id: 20, name: "DU Vibes", logo: duvibes, link: "#" },
    { id: 21, name: "Echo3D", logo: echo3d, link: "https://www.echo3d.com/" },
    { id: 22, name: "ETH India", logo: ethindia, link: "https://ethindia.co/" },
    { id: 23, name: "Final Revise", logo: finalrevise, link: "#" },
    { id: 24, name: "GigaByte", logo: giga, link: "https://www.gigabyte.com/" },
    { id: 25, name: "Insight One", logo: insightone, link: "#" },
    { id: 26, name: "Lenskart", logo: lenskart, link: "https://www.lenskart.com/" },
    { id: 27, name: "Polygon", logo: polygon, link: "https://polygon.technology/" },
    { id: 28, name: "Red FM India", logo: redfm, link: "https://www.redfmindia.in/" },
    { id: 29, name: "Sportsun", logo: sportsun, link: "#" },
    { id: 30, name: "Starbucks", logo: starbucks, link: "https://www.starbucks.in/" },
    { id: 31, name: "The Education Tree", logo: theeducationtree, link: "https://www.theeducationtree.com/" },
    { id: 32, name: "Wolfram", logo: wolfram, link: "https://www.wolfram.com/" },
    { id: 33, name: "Youth India", logo: youth, link: "#" },
    { id: 34, name: "Zebronics", logo: zebronics, link: "https://zebronics.com/" },
    { id: 35, name: "DU Competitions", logo: ducomp, link: "#" },
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
