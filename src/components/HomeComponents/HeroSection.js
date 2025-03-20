// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../../styles/HeroSection.css";
import videoBg from "../../assets/Videos/sankalanBg.mp4"
const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Countdown Timer Calculation
  function calculateTimeLeft() {
    const targetDate = new Date("2025-04-04T00:00:00"); // Event date (March 10, 2025)
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  // Update Countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      {/* Video Background with Fallback */}
      <div className="video-overlay"></div>
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Animated Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SANKALAN 2025
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <span className="hero-typewriter">
          <Typewriter
            words={[
              "Where AI Meets Creativity!",
              "Unleash Innovation with AI!",
              "Sankalan 2025: Explore AI Horizons!"
            ]}
            loop={true} // Keeps looping
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </span>
        </motion.p>

        {/* Countdown Timer */}
        <div className="heroSectionCountdown-container">
          <div className="heroSectionCountdown-item">
            <span>{timeLeft.days}</span> Days
          </div>
          <div className="heroSectionCountdown-item">
            <span>{timeLeft.hours}</span> Hours
          </div>
          <div className="heroSectionCountdown-item">
            <span>{timeLeft.minutes}</span> Min
          </div>
          <div className="heroSectionCountdown-item">
            <span>{timeLeft.seconds}</span> Sec
          </div>
        </div>

        {/* Call to Action */}
        <motion.a
          href="/events"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Register Now
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
