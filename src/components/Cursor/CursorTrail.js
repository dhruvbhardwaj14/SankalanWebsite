import React, { useEffect, useRef } from "react";
import "../../styles/CursorTrail.css";

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const maxPoints = 25; // Trail length (adjust for a sleeker look)
  const trailTimeoutRef = useRef(null);
  const fadeFactorRef = useRef(1); // Controls fading out

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Draw the cursor trail with fading effect
    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);

        for (let i = 1; i < points.current.length; i++) {
          const point = points.current[i];
          ctx.lineTo(point.x, point.y);
        }

        // Gradient to give a sleek line appearance
        const gradient = ctx.createLinearGradient(
          points.current[0].x,
          points.current[0].y,
          points.current[points.current.length - 1].x,
          points.current[points.current.length - 1].y
        );
        gradient.addColorStop(0, `rgba(100, 255, 218, ${fadeFactorRef.current})`);
        gradient.addColorStop(1, `rgba(160, 123, 254, ${fadeFactorRef.current})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      requestAnimationFrame(drawTrail);
    };

    drawTrail();

    // Handle mouse movement and reset fading
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      points.current.push({ x, y });
      if (points.current.length > maxPoints) {
        points.current.shift(); // Maintain trail length
      }

      // Reset fade factor and clear fade timeout
      fadeFactorRef.current = 1;
      resetTrailTimeout();
    };

    // Gradually fade the line after 2 seconds of inactivity
    const resetTrailTimeout = () => {
      if (trailTimeoutRef.current) {
        clearTimeout(trailTimeoutRef.current);
      }

      trailTimeoutRef.current = setTimeout(() => {
        const fadeOut = () => {
          if (fadeFactorRef.current > 0) {
            fadeFactorRef.current -= 0.05; // Reduce opacity smoothly
            setTimeout(fadeOut, 50); // Continue reducing opacity every 50ms
          } else {
            points.current = []; // Clear points once fully faded
          }
        };
        fadeOut();
      }, 2000); // Start fading after 2s of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(trailTimeoutRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
};

export default CursorTrail;
