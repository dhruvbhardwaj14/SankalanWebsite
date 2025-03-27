import React from "react";
import HeroSection from "./HomeComponents/HeroSection.js";
import MissionVision from "./HomeComponents/MissionVision.js";
import WhySankalan from "./HomeComponents/WhySankalan.js";
import EventTimeline from "./HomeComponents/EventTimeline.js";
import Testimonials from "./HomeComponents/Testimonials.js";
import GalleryShowcase from "./HomeComponents/GalleryShowcase.js";
import DepartmentImg from "../assets/PNG/DepartmentImg.webp";
import { motion } from "framer-motion";
import "../styles/Components.css";
import sankalanIllustration from "../assets/PNG/SankalanMain.webp"
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
      <p style={{textAlign:"justify"}}>
      <strong>Sankalan</strong> is an esteemed festival that represents the seamless integration of 
      <strong> knowledge</strong>, <strong>talent</strong>, <strong>innovation</strong>, and, of course, 
      <strong> technology</strong>. Since <strong>2005</strong>, this annual two-day technical festival 
      has steadily grown to become a premier event. Known for its distinguished platform for 
      technologists, <strong>Sankalan</strong> serves as the ultimate arena for showcasing expertise in 
      a wide array of both <strong>technical</strong> and <strong>non-technical events</strong>. It provides an 
      exceptional opportunity for participants from across the country to demonstrate their 
      <strong>skills</strong> and <strong>creativity</strong>, making it a highly anticipated gathering for 
      <strong> tech enthusiasts</strong> and <strong>professionals</strong> alike.
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
            <p className="department-description" style={{textAlign:"justify"}}>
            The <strong>Department of Computer Science Society (DUCSS)</strong> is proud to represent the 
            <strong> Department of Computer Science</strong> at the University of Delhi. We are committed to 
            encouraging <strong>innovation</strong> and <strong>research</strong>, providing students with valuable 
            opportunities for <strong>skill development</strong> and <strong>collaboration</strong>. Our engaging 
            technical events create remarkable avenues for <strong>personal</strong> and <strong>professional growth</strong>. 
            The annual technical fest, <strong>Sankalan</strong>, brings together tech enthusiasts and talented 
            individuals from esteemed institutions across the country.
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
