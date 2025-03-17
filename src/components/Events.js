import React from "react";
import { FaBullhorn } from "react-icons/fa";
import "../styles/Components.css"; 

const Events = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="events-header">
          <FaBullhorn className="megaphone left" />
          <h1 className="events-title">Events</h1>
          <FaBullhorn className="megaphone right" />
        </div>
      </div>
    </div>
  );
};

export default Events;
