import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Components.css";
import EventFilter from "./Updates/EventFilter.js";
import Timeline from "./Updates/Timeline.js";
import CountDown from "./Updates/CountDown.js";
import NotificationCard from "./Updates/NotificationCard.js";

const Updates = () => {
  // Initial Notification Data
  const initialNotifications = [
    {
      title: "Hackathon Registration Open!",
      message:
        "Registrations for the Hackathon 2025 are now open. Hurry up and secure your spot before the deadline!",
      date: "March 25, 2025",
    },
    {
      title: "AI/ML Workshop Registration Open!",
      message:
        "Join us for an in-depth workshop on Artificial Intelligence and Machine Learning. Limited seats available!",
      date: "April 10, 2025",
    },
    {
      title: "Exclusive Guest Lecture by Industry Expert",
      message:
        "Don't miss the opportunity to attend a guest lecture by a leading AI researcher from Google. Register now!",
      date: "April 20, 2025",
    },
    {
      title: "CodeRush 2025 is Here!",
      message:
        "Gear up for the ultimate coding showdown! Participate in CodeRush and win exciting prizes.",
      date: "April 15, 2025",
    },
  ];

  // State for Notifications
  const [notifications, setNotifications] = useState(initialNotifications.reverse()); // Latest on Top
  const [showAll, setShowAll] = useState(false);

  // Toggle All Notifications
  const toggleNotifications = () => {
    setShowAll(!showAll);
  };

  // Handle Notification Delete
  const handleDelete = (title) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.title !== title
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="mainPage">
      <div className="updatesParallax">
        {/* Marquee for Notification Hint */}
      <div className="marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-text">
            📢 Click on <strong>Show All Notification</strong> to view all the
            latest notifications about Events and other activities! 🚀
          </div>
        </div>
      </div>

        {/* Header Section */}
        <div className="updates-header">
          <h1 className="updates-title">
            UPDATES
            <span className="updates-icon">
              <FontAwesomeIcon icon={faBell} />
            </span>
          </h1>
        </div>

        {/* Countdown Centered */}
        <div className="countdown-wrapper">
          <CountDown />
        </div>

        {/* Show/Hide Notification Button */}
        <div className="notification-toggle">
          <button className="toggle-btn" onClick={toggleNotifications}>
            {showAll ? (
              <>
                Hide Notifications <FontAwesomeIcon icon={faChevronUp} />
              </>
            ) : (
              <>
                Show All Notifications <FontAwesomeIcon icon={faChevronDown} />
              </>
            )}
          </button>
        </div>

        {/* Notification Cards - Show when showAll is true */}
        {showAll && (
          <div className="notification-container">
            {notifications.map((notification, index) => (
              <NotificationCard
                key={index}
                title={notification.title}
                message={notification.message}
                date={notification.date}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Main Grid Layout */}
        <div className="updates-container">
          {/* Left Section - Event Filter */}
          <div className="updates-left">
            <EventFilter />
          </div>

          {/* Right Section - Timeline */}
          <div className="updates-right">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
