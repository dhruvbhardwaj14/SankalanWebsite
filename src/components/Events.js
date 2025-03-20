import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "../styles/Components.css";
import EventCard from "./EventCard.js";

const technicalEvents = [
  {
    id: 1,
    title: "Code Clash",
    description: "Solve real-world problems in a high-stakes coding battle.",
    longDescription:
      "Code Clash is a high-octane competitive coding event where participants will tackle complex real-world problems using various programming languages. It's a battle of speed, logic, and accuracy where only the best emerge victorious.",
    date: "March 20, 2025",
    time: "10 AM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    rules: [
      "Team size: 2-4 participants.",
      "Participants can use C++, Java, or Python.",
      "Internet access is restricted during the competition.",
      "Duration: 3 hours.",
    ],
  },
  {
    id: 2,
    title: "AI Warfare",
    description: "Compete in AI-powered bot battles and automation challenges.",
    longDescription:
      "AI Warfare invites participants to build and train AI-powered bots that can outperform their opponents in strategic battles and automation tasks. Test the limits of your machine learning models in this adrenaline-packed event.",
    date: "March 21, 2025",
    time: "2 PM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    rules: [
      "Participants can work solo or in teams of 2.",
      "Use of pre-trained models is allowed.",
      "Submission must be within 24 hours post-event.",
      "Judging criteria: Efficiency, Accuracy, and Innovation.",
    ],
  },
  {
    id: 3,
    title: "Cyber CTF",
    description: "Test your ethical hacking skills in a Capture the Flag competition.",
    longDescription:
      "Cyber CTF is a thrilling capture-the-flag competition where participants simulate real-world hacking scenarios. Your mission: exploit vulnerabilities, solve puzzles, and secure your position on the leaderboard.",
    date: "March 22, 2025",
    time: "4 PM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/5380663/pexels-photo-5380663.jpeg",
    rules: [
      "Solo participants only.",
      "No external tools or cheats allowed.",
      "Ethical guidelines must be strictly followed.",
      "CTF flags must be submitted within the allotted time.",
    ],
  },
  {
    id: 4,
    title: "Robotics Arena",
    description: "Design, build, and battle your robots in an exciting showdown.",
    longDescription:
      "Step into the Robotics Arena where creativity meets engineering! Build, code, and test your robots to outmaneuver and outsmart the competition. The event features multiple challenges, from obstacle navigation to robotic duels.",
    date: "March 23, 2025",
    time: "12 PM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    rules: [
      "Team size: Maximum 3 members.",
      "Bring your own robot (BYOR).",
      "Judging based on design, functionality, and task completion.",
      "Malfunctions will lead to disqualification.",
    ],
  },
];

const nonTechnicalEvents = [
  {
    id: 5,
    title: "Mystery Quest",
    description: "A thrilling treasure hunt filled with cryptic clues and riddles.",
    longDescription:
      "Get ready for an adventurous journey as you embark on a quest to solve mysteries, crack clues, and unearth treasures hidden around the campus. Mystery Quest will put your wit and problem-solving skills to the test.",
    date: "March 22, 2025",
    time: "11 AM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/164503/pexels-photo-164503.jpeg",
    rules: [
      "Team size: 2-4 participants.",
      "Clues must be solved in sequence.",
      "No internet assistance allowed.",
      "Fastest team to solve all clues wins.",
    ],
  },
  {
    id: 6,
    title: "Battle of Words",
    description: "Engage in an intense debate on trending topics.",
    longDescription:
      "Battle of Words is a high-energy debate where participants will engage in verbal duels on trending and thought-provoking topics. Sharpen your arguments and put your oratory skills to the ultimate test.",
    date: "March 23, 2025",
    time: "3 PM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg",
    rules: [
      "Participants must adhere to allotted time limits.",
      "Rebuttals must be respectful and relevant.",
      "Topics will be announced 24 hours in advance.",
      "No personal attacks or inappropriate language allowed.",
    ],
  },
  {
    id: 7,
    title: "Quiz Mania",
    description: "Test your general knowledge with an exciting quiz competition.",
    longDescription:
      "Quiz Mania is a fun and exciting event where participants showcase their knowledge across multiple domains including science, history, pop culture, and more. Be quick and accurate to stay ahead!",
    date: "March 24, 2025",
    time: "1 PM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg",
    rules: [
      "Team size: 2-3 members.",
      "Each round will have a set time limit.",
      "Use of mobile phones or internet is prohibited.",
      "Incorrect answers lead to deduction of points.",
    ],
  },
  {
    id: 8,
    title: "Gaming Showdown",
    description: "Compete in an electrifying eSports tournament.",
    longDescription:
      "Gear up for an adrenaline-pumping eSports tournament where participants will battle it out in popular multiplayer games. Teamwork, strategy, and quick reflexes are key to securing victory.",
    date: "March 25, 2025",
    time: "5 PM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/7915425/pexels-photo-7915425.jpeg",
    rules: [
      "Team size: 5 players (max).",
      "Games will be announced 48 hours before the event.",
      "Fair play and sportsmanship are mandatory.",
      "Any violation of rules will lead to disqualification.",
    ],
  },
];



const Events = () => {
  const [category, setCategory] = useState("technical");
  const events = category === "technical" ? technicalEvents : nonTechnicalEvents;

  return (
    <div className="mainPage">
      <div className="eventParallax">
        {/* Event Header */}
        <div className="events-header">
          <FaBullhorn className="megaphone left" />
          <h1 className="events-title">Events</h1>
          <FaBullhorn className="megaphone right" />
        </div>

        {/* Event Container */}
        <div className="event-container">
          {/* Buttons Section */}
          <div className="event-buttons">
            <button 
              className={`event-button ${category === "technical" ? "active" : ""}`} 
              onClick={() => setCategory("technical")}
            >
              Technical
            </button>
            <button 
              className={`event-button ${category === "nonTechnical" ? "active" : ""}`} 
              onClick={() => setCategory("nonTechnical")}
            >
              Non-Technical
            </button>
          </div>

          {/* Event List */}
          <div className="event-list">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
