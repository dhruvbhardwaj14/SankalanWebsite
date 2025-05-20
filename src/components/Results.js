import React from "react";
import "../styles/Results.css";

const resultsData = [
  {
    event: "Algoholics",
    winners: [
      { position: "First Position", names: "Vansh Garg, DUCS and Ayan Mahajan, DTU" },
      { position: "Second Position", names: "Navneet Kumar Singh, LIET" },
      { position: "Third Position", names: "Nikhil Mishra, ABESIT" },
    ],
  },
  {
    event: "Blind Coding",
    winners: [
      { position: "First Position", names: "Mohit Kumar Singh, DUCS and Utsav Sharma, DUOR" },
      { position: "Second Position", names: "Pankaj Tyagi, DUCS and Ramchandra, FOT DU" },
      { position: "Third Position", names: "Abhishek Tiwari, DDUC DU" },
    ],
  },
  {
    event: "Code Auction",
    winners: [
      {
        position: "First Position",
        names: "Charu Patel, Akanksha Dhami, Manya Anand, Abhishek Martolia - IGDTUW, Delhi",
      },
      {
        position: "Second Position",
        names: "Abhishek Tiwari, Sonu Kumar, Karan Mahato - DDUC, DU",
      },
      {
        position: "Third Position",
        names: "Nikhil Chaudhary, Sapavath Hanumanth, Ashutosh Ranjan - FOT, DU",
      },
    ],
  },
  {
    event: "HACKDUCS'25",
    winners: [
      {
        position: "First Position",
        names: "Syntax Squad, JIMS - Kartik, Shivansh, Ekta Arora, Ayush",
      },
      {
        position: "Second Position",
        names: "Code Blooded, BPIT - Shreya Jaiswal, Krish Mishra, Raashi Mathur, Garima Purohit",
      },
      {
        position: "Third Position",
        names: "Lectura, NSUT - Mogit Mongia, Abdullah Ansari",
      },
    ],
  },
  {
    event: "Overtorque",
    winners: [
      {
        position: "First Position",
        names: "The Dark Knights - Adhyann Singal, DPS RK Puram",
      },
      {
        position: "Second Position",
        names: "Mechanics1 - Shreyansh Garg, IITM Janakpuri",
      },
      {
        position: "Third Position",
        names: "Dark Knights 2 - Aryamman Ojha, DPS RK Puram",
      },
    ],
  },
  {
    event: "Squash the Bugs",
    winners: [
      { position: "First Position", names: "Nikhil Mishra, ABESIT" },
      { position: "Second Position", names: "Pankaj Tyagi, DUCS and Ayan Mahajan, DTU" },
      { position: "Third Position", names: "Vedica Gairola, DTU" },
    ],
  },
  {
    event: "Chakravyuh",
    winners: [
      {
        position: "First Position",
        names: "CerebralArchitects, DUOR - Jyoti Singh Yadav, Shashank Mehrotra, Aniruddh Kumar Shah",
      },
      {
        position: "Second Position",
        names: "CHIPS, DUOR - Sarita Gupta, Utkarsh Laswai, Priyanshu Sengupta, Abhishek Gupta",
      },
    ],
  },
  {
    event: "Feet on Fire",
    winners: [
      {
        position: "First Position",
        names: "Ramjas Dance Society, Ramjas College, DU",
      },
      {
        position: "Second Position",
        names: "Kayra, Mata Sundri College for Women, DU",
      },
      {
        position: "Third Position",
        names: "Oorja, Hansraj College, DU",
      },
    ],
  },
  {
    event: "Dastur-e-Mehfil",
    winners: [
      {
        position: "First Position - English",
        names: "Ananya Aneja, Kamala Nehru College, DU",
      },
      {
        position: "First Position - Hindi",
        names: "Ayush Aavart, Department of Hindi, DU",
      },
      {
        position: "Second Position - English",
        names: "Vaishnavi Snigdha, Janki Devi Memorial College, DU",
      },
      {
        position: "Second Position - Hindi",
        names: "Nishant, Ramjas College, DU",
      },
    ],
  },
];

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
