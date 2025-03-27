// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../../styles/HeroSection.css";
import videoBgMP4 from "../../assets/Videos/sankalanBg_optimized.mp4";
import videoBgWebM from "../../assets/Videos/sankalanBg.webm";
import videoBg480p from "../../assets/Videos/sankalanBg_480p.mp4";
import videoBg360p from "../../assets/Videos/sankalanBg_360p.mp4";
import posterImg from "../../assets/Videos/sankalanPoster.png";
const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Countdown Timer Calculation
  function calculateTimeLeft() {
    // Corrected target date to 19th April 2025
    const targetDate = new Date("2025-04-19T00:00:00Z"); // UTC time
    const now = new Date();
  
    // Calculate the difference in milliseconds
    const difference = targetDate.getTime() - now.getTime();
  
    // If the target date has passed, return zeros
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    return {
      days,
      hours,
      minutes,
      seconds,
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

      {/* Video with Multiple Sources and Poster */}
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        poster={posterImg}
        preload="auto"
      >
        <source src={videoBgWebM} type="video/webm" />
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
              "Here the Future Runs on Quantum Speed.",
              "Where AI Meets Creativity!",
              "Sankalan 2025: Where Cyber Threats Met Cyber Solutions."
            ]}
            loop={true} // Keeps looping
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={500}
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
