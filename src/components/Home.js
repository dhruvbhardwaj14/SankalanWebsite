import React from "react";
import HeroSection from "./HomeComponents/HeroSection.js";
import MissionVision from "./HomeComponents/MissionVision.js";
import WhySankalan from "./HomeComponents/WhySankalan.js";
import EventTimeline from "./HomeComponents/EventTimeline.js";
import Testimonials from "./HomeComponents/Testimonials.js";
import GalleryShowcase from "./HomeComponents/GalleryShowcase.js";
import DepartmentImg from "../assets/PNG/DepartmentImg.png";
import { motion } from "framer-motion";
import "../styles/Components.css";
import sankalanIllustration from "../assets/PNG/SankalanMain.png"
// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Home = () => {
  return (
    <div className="mainPage">
      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <HeroSection />
      </motion.div>

      {/* About Sankalan Section */}
      <motion.section
        className="about-sankalan"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
  <div className="about-container">
    <motion.div
      className="about-text"
      variants={fadeInUp}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2>
        About <span>Sankalan</span>
      </h2>
      <p>
        Sankalan is the annual technical fest of the Department of Computer
        Science, University of Delhi. A vibrant confluence of innovation,
        technology, and talent where participants from various institutions
        converge to explore, learn, and showcase their skills.
      </p>
    </motion.div>
    <motion.div
      className="about-illustration"
      variants={fadeInRight}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <img
        src={sankalanIllustration}
        alt="About Illustration"
      />
    </motion.div>
  </div>
</motion.section>

      {/* About Department Section */}
      <motion.section
        className="department-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
      >
        <div className="department-container">
          <div className="department-text">
            <h2 className="department-title">About Department of Computer Science</h2>
            <p className="department-description">
              The Department of Computer Science at the University of Delhi is one of the most prestigious departments in India.
              Known for its excellence in academics and research, the department provides cutting-edge knowledge and practical
              skills to students in areas like Artificial Intelligence, Machine Learning, Big Data, and more. It also hosts
              <strong> Sankalan </strong>, an annual technical fest that showcases the talents of students through various competitions,
              workshops, and seminars.
            </p>
            <p className="department-mission">
              Our mission is to foster innovation, critical thinking, and technological expertise while contributing to the ever-growing
              field of Computer Science.
            </p>
          </div>
          <div className="department-image">
            <img src={DepartmentImg} alt="Department of Computer Science" />
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
        <MissionVision />
      </motion.div>

      {/* Why Sankalan Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft}>
        <WhySankalan />
      </motion.div>

      {/* Timeline Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInRight}>
        <EventTimeline />
      </motion.div>

      {/* AI Initiatives Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
        <Testimonials />
      </motion.div>

      {/* Gallery/Showcase Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft}>
        <GalleryShowcase />
      </motion.div>
    </div>
  );
};

export default Home;
