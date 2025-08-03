import React from "react";
import "../styles/Results.css";
import resultsData from "../data/resultData.js"


const Results = () => {
  return (
    <div className="results-container">
      <h1 className="results-heading">Sankalan 2025 Results</h1>
      <div className="results-list">
        {resultsData.map((event, index) => (
          <div className="event-box" key={index}>
            <h2 className="event-name">{event.event}</h2>
            {event.winners.map((winner, idx) => (
              <p className="winner" key={idx}>
                <strong>{winner.position}:</strong> {winner.names}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
