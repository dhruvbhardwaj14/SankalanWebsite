import React from "react";
import "../../styles/NotificationCard.css";

const NotificationCard = ({ title, message, date, onDelete }) => {
  return (
    <div className="notification-card">
      {/* Close Button to Delete */}
      <button className="close-btn" onClick={() => onDelete(title)}>
        ❌
      </button>

      {/* Notification Content */}
      <h3 className="notification-title">{title}</h3>
      <p className="notification-message">{message}</p>
      <p className="notification-date">📅 {date}</p>
    </div>
  );
};

export default NotificationCard;
