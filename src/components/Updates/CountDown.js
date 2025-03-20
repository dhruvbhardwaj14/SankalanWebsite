import React, { useState, useEffect } from "react";
import "../../styles/Countdown.css";

const targetDate = new Date("2025-04-10T00:00:00");

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Hackathon 2025 Starts In:</h2>
      <div className="countdown-timer">
        <div>
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
