import React, { useEffect, useState } from "react";
import HeroSection from "./HomeComponents/HeroSection.js";
import MissionVision from "./HomeComponents/MissionVision.js";
import WhySankalan from "./HomeComponents/WhySankalan.js";
import EventTimeline from "./HomeComponents/EventTimeline.js";
import Testimonials from "./HomeComponents/Testimonials.js";
import GalleryShowcase from "./HomeComponents/GalleryShowcase.js";
import DepartmentImg from "../assets/PNG/DepartmentImg.png";
import { motion } from "framer-motion";
import "../styles/Components.css";
import sankalanIllustration from "../assets/PNG/SankalanMain.png";

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
  const [isMobile, setIsMobile] = useState(false);

  // Check window size on mount
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Conditional Wrapper (motion.div or div based on isMobile)
  const Wrapper = isMobile ? "div" : motion.div;
  const SectionWrapper = isMobile ? "section" : motion.section;

  return (
    <div className="mainPage">
      {/* Hero Section */}
      <Wrapper initial="hidden" animate="visible" variants={!isMobile ? fadeInUp : {}}>
        <HeroSection />
      </Wrapper>

      {/* About Sankalan Section */}
      <SectionWrapper
        className="about-sankalan"
        initial="hidden"
        whileInView={!isMobile ? "visible" : ""}
        viewport={!isMobile ? { once: true } : {}}
        variants={!isMobile ? fadeInUp : {}}
      >
        <div className="about-container">
          <Wrapper
            className="about-text"
            variants={!isMobile ? fadeInUp : {}}
            transition={!isMobile ? { delay: 0.2, duration: 1 } : {}}
          >
            <h2>
              About <span>Sankalan</span>
            </h2>
            <p style={{ textAlign: "justify" }}>
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
          </Wrapper>
          <Wrapper
            className="about-illustration"
            variants={!isMobile ? fadeInRight : {}}
            transition={!isMobile ? { delay: 0.4, duration: 1 } : {}}
          >
            <img src={sankalanIllustration} alt="About Illustration" />
          </Wrapper>
        </div>
      </SectionWrapper>

      {/* About Department Section */}
      <SectionWrapper
        className="department-section"
        initial="hidden"
        whileInView={!isMobile ? "visible" : ""}
        viewport={!isMobile ? { once: true } : {}}
        variants={!isMobile ? fadeInRight : {}}
      >
        <div className="department-container">
          <div className="department-text">
            <h2 className="department-title">About Department of Computer Science</h2>
            <p className="department-description" style={{ textAlign: "justify" }}>
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
      </SectionWrapper>

      {/* Mission & Vision Section */}
      <Wrapper initial="hidden" whileInView={!isMobile ? "visible" : ""} variants={!isMobile ? fadeInUp : {}}>
        <MissionVision />
      </Wrapper>

      {/* Why Sankalan Section */}
      <Wrapper initial="hidden" whileInView={!isMobile ? "visible" : ""} variants={!isMobile ? fadeInLeft : {}}>
        <WhySankalan />
      </Wrapper>

      {/* Timeline Section */}
      <Wrapper initial="hidden" whileInView={!isMobile ? "visible" : ""} variants={!isMobile ? fadeInRight : {}}>
        <EventTimeline />
      </Wrapper>

      {/* AI Initiatives Section */}
      <Wrapper initial="hidden" whileInView={!isMobile ? "visible" : ""} variants={!isMobile ? fadeInUp : {}}>
        <Testimonials />
      </Wrapper>

      {/* Gallery/Showcase Section */}
      <Wrapper initial="hidden" whileInView={!isMobile ? "visible" : ""} variants={!isMobile ? fadeInLeft : {}}>
        <GalleryShowcase />
      </Wrapper>
    </div>
  );
};

export default Home;
