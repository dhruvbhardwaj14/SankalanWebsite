import React from "react";
import "../styles/Home.css"; // Ensure styles are in an external file
import { Link } from "react-router-dom"; 
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
const Home = () => {
  return (
    <div className="homePage">
      <div className="parallax">
      <div className="home-content">
        <h1 className="home-title">SANKALAN<br />
         <span style={{fontSize:"40px",color:"white"}}>2025</span></h1>
        <Link to="/learn-more" className="learn-more-button">REGISTER NOW!</Link>
        <div className="social-links">
        <Link to="/instagram">
            <FaInstagram size={30} color="white"/>
        </Link>
        <Link to="/linkedin">
            <FaLinkedin size={30} color="white"/>
        </Link>
        <Link to="/facebook">
            <FaFacebook size={30} color="white"/>
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
