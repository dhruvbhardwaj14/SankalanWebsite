import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Footer Links */}
        <div className="footer-links">
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
          <span className="divider">·</span>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>COPYRIGHT © SANKALAN 2025</p>
          <p>Delhi University Computer Science Society</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/sankalan.ducs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.fb.com/ducs.sankalan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/school/department-of-computer-science-university-of-delhi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
