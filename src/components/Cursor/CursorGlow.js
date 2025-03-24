import React, { useEffect, useState } from "react";
import "../../styles/CursorGlow.css";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(20); // Initial glow size

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Dynamically increase/decrease size on movement
      setSize((prevSize) => Math.min(prevSize + 1.5, 40));
      clearTimeout(window.glowTimer);
      window.glowTimer = setTimeout(() => setSize(20), 100); // Reset size after 100ms
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 2}px rgba(100, 255, 218, 0.9), 0 0 ${
          size * 3
        }px rgba(160, 123, 254, 0.7)`,
      }}
    />
  );
};

export default CursorGlow;
