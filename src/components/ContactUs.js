import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const generalContacts = [
    {
      name: "Pushpender Singh Meena",
      email: "pushpendersmsc23@cs.du.ac.in",
      phone: "+91 8287743327",
    },
    {
      name: "Chetan Verma",
      email:"chetanvmsc23@cs.du.ac.in",
      phone: "+91 7878981705",
    },
    {
      name: "Deepak Jangir",
      email: "deepakjmsc24@cs.du.ac.in",
      phone: "+91 8000595793",
    },
  ];

  const coordinatorContacts = [
    {
      name: "Abhishek Mahar",
      email: "Abhishekmmsc23@cs.du.ac.in",
      phone: "+91 9910533912",
    },
    {
      name: "Pardeep Singh",
      email: "psingh@cs.du.ac.in",
      phone: "+91 8278862679",
    },
  ];

  // Variants for animation
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="contactParallax"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Main Container */}
      <motion.div className="contact-container" variants={fadeIn}>
        {/* Header Section */}
        <motion.div className="contact-header" variants={fadeIn}>
          <h1>Contact Us</h1>
          <p>
            For any queries, please mail us at{" "}
            <a href="mailto:support@ducss.tech" className="contact-email">
              support@ducss.tech
            </a>{" "}
            or contact any of the following representatives:
          </p>
        </motion.div>

        {/* General Queries Section */}
        <motion.div className="query-section" variants={fadeIn}>
          <h2>For General Queries</h2>
          <motion.div className="contact-cards" variants={staggerContainer}>
            {generalContacts.map((contact, index) => (
              <motion.div
                className="contact-card"
                key={index}
                variants={fadeIn}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <h3>{contact.name}</h3>
                <p>
                  <FaEnvelope />{" "}
                  <a href={`mailto:${contact.email}`} className="contact-link">
                    {contact.email}
                  </a>
                </p>
                <p>
                  <FaPhone />{" "}
                  <a href={`tel:${contact.phone}`} className="contact-link">
                    {contact.phone}
                  </a>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Event & PhD Coordinators Section */}
        <motion.div className="query-section" variants={fadeIn}>
          <h2>Event Coordinator & PhD Coordinator</h2>
          <motion.div className="contact-cards" variants={staggerContainer}>
            {coordinatorContacts.map((contact, index) => (
              <motion.div
                className="contact-card"
                key={index}
                variants={fadeIn}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <h3>{contact.name}</h3>
                <p>
                  <FaEnvelope />{" "}
                  <a href={`mailto:${contact.email}`} className="contact-link">
                    {contact.email}
                  </a>
                </p>
                <p>
                  <FaPhone />{" "}
                  <a href={`tel:${contact.phone}`} className="contact-link">
                    {contact.phone}
                  </a>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Location Section */}
        <motion.div className="location-section" variants={fadeIn}>
          <h2>Our Location</h2>
          <p>
            <FaMapMarkerAlt /> Department of Computer Science, Faculty of
            Mathematical Sciences, New Academic Block, University of Delhi,
            Delhi, INDIA 110007.
          </p>
          <p>Nearest metro station: Vishwavidyalaya.</p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="social-section" variants={fadeIn}>
          <h2>Follow Us</h2>
          <motion.div className="social-icons" variants={staggerContainer}>
            <motion.a
              href="https://www.instagram.com/sankalan.ducs"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
            >
              <FaInstagram className="social-icon" /> @sankalan.ducs
            </motion.a>
            <motion.a
              href="https://www.fb.com/ducs.sankalan"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
            >
              <FaFacebook className="social-icon" /> fb.com/ducs.sankalan
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/school/department-of-computer-science-university-of-delhi/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
            >
              <FaLinkedin className="social-icon" /> Delhi University Computer
              Science
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
