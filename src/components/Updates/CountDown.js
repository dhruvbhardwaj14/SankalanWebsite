import React, { useState, useEffect } from "react";
import "../../styles/Countdown.css";
// Import allEvents from EventFilter.js
import { allEvents } from "./EventFilter";

// Helper to format date and time
const parseDateTime = (event) => {
  return new Date(`${event.date} ${event.time}`);
};

// Get the next upcoming events with the same date and time
const getNextUpcomingEvents = () => {
  const now = new Date();
  const upcomingEvents = allEvents
    .map((event) => ({
      ...event,
      dateTime: parseDateTime(event),
    }))
    .filter((event) => event.dateTime > now) // Filter upcoming events
    .sort((a, b) => a.dateTime - b.dateTime); // Sort by nearest time

  // Get the first event's date and time if available
  if (upcomingEvents.length === 0) return [];

  const nextEventDateTime = upcomingEvents[0].dateTime;

  // Filter events with the same date and time
  return upcomingEvents.filter(
    (event) => event.dateTime.getTime() === nextEventDateTime.getTime()
  );
};

const Countdown = () => {
  const [nextEvents, setNextEvents] = useState(getNextUpcomingEvents());

  const calculateTimeLeft = () => {
    if (nextEvents.length === 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const now = new Date();
    const difference = nextEvents[0].dateTime - now;

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

    // Recheck for next events when the countdown finishes
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      setNextEvents(getNextUpcomingEvents());
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="countdown-container">
      {nextEvents.length > 0 ? (
        <>
          <h2 className="countdown-title">
            {nextEvents.length === 1
              ? `${nextEvents[0].title} Starts In:`
              : `${nextEvents.map((event) => event.title).join(", ")} Start In:`}
          </h2>
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
        </>
      ) : (
        <h2 className="countdown-title">No Upcoming Events!</h2>
      )}
    </div>
  );
};

export default Countdown;
