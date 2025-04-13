import React from "react";
import Particles from "react-tsparticles";

const CursorParticles = () => {
  const particlesOptions = {
    particles: {
      number: { value: 50 },
      size: { value: 4 },
      move: { enable: true, speed: 2 },
      opacity: { value: 0.5 },
      color: { value: "#64ffda" },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
  };

  return <Particles params={particlesOptions} />;
};

export default CursorParticles;
