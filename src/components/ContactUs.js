import {React,useState,useEffect} from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
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
  const fadeIn = !isMobile
    ? {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }
    : {};

  const staggerContainer = !isMobile
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }
    : {};

  const Wrapper = isMobile ? "div" : motion.div;

  return (
    <Wrapper
      className="contactParallax"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Main Container */}
      <Wrapper className="contact-container" variants={fadeIn}>
        {/* Header Section */}
        <Wrapper className="contact-header" variants={fadeIn}>
          <h1>Contact Us</h1>
          <p>
            For any queries, please mail us at{" "}
            <a href="mailto:support@ducss.tech" className="contact-email">
              support@ducss.tech
            </a>{" "}
            or contact any of the following representatives:
          </p>
        </Wrapper>

        {/* General Queries Section */}
        <Wrapper className="query-section" variants={fadeIn}>
          <h2>For General Queries</h2>
          <Wrapper className="contact-cards" variants={staggerContainer}>
            {generalContacts.map((contact, index) => (
              <Wrapper
                className="contact-card"
                key={index}
                variants={fadeIn}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.05,
                        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                      }
                    : {}
                }
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
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>

        {/* Event & PhD Coordinators Section */}
        <Wrapper className="query-section" variants={fadeIn}>
          <h2>Event Coordinator & PhD Coordinator</h2>
          <Wrapper className="contact-cards" variants={staggerContainer}>
            {coordinatorContacts.map((contact, index) => (
              <Wrapper
                className="contact-card"
                key={index}
                variants={fadeIn}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.05,
                        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                      }
                    : {}
                }
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
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>

        {/* Location Section */}
        <Wrapper className="location-section" variants={fadeIn}>
          <h2>Our Location</h2>
          <p>
            <FaMapMarkerAlt /> Department of Computer Science, Faculty of
            Mathematical Sciences, New Academic Block, University of Delhi,
            Delhi, INDIA 110007.
          </p>
          <p>Nearest metro station: Vishwavidyalaya.</p>
        </Wrapper>

        {/* Social Media Links */}
        <Wrapper className="social-section" variants={fadeIn}>
          <h2>Follow Us</h2>
          <Wrapper className="social-icons" variants={staggerContainer}>
            <a
              href="https://www.instagram.com/sankalan.ducs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" /> @sankalan.ducs
            </a>
            <a
              href="https://www.fb.com/ducs.sankalan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" /> fb.com/ducs.sankalan
            </a>
            <a
              href="https://www.linkedin.com/school/department-of-computer-science-university-of-delhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" /> Delhi University Computer
              Science
            </a>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ContactUs;
