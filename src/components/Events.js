import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "../styles/Components.css";
import EventCard from "./EventCard.js";

const technicalEvents = [
  {
    id: 1,
    title: "HACKDUCS",
    description: "Solve real-world problems in a high-stakes coding battle.",
    longDescription:
      "HackDUCS is the ultimate inter-university hackathon that brings together the brightest minds to innovate, collaborate, and compete. Participants work on groundbreaking ideas, develop solutions, and present their innovations to a distinguished panel of judges. Expect intense problem-solving and the opportunity to win a prize pool of $496.",
    date: "March 20, 2025",
    time: "10 AM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    rules: [
      "Team size: 2-4 participants.",
      "Internet access is restricted during the competition.",
      "Duration: 24 hours.",
      "Judging based on creativity, technical complexity, and implementation.",
    ],
  },
  {
    id: 2,
    title: "Blind Coding",
    description: "Code without seeing the screen, testing your memory and logic.",
    longDescription:
      "Blind Coding pushes participants to their limits as they code without seeing the screen or using internet resources. This thrilling event tests logic, memory, and problem-solving skills in high-pressure scenarios. Only the most precise and confident coders will prevail.",
    date: "March 21, 2025",
    time: "2 PM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg",
    rules: [
      "Participants can work solo or in teams of 2.",
      "No internet or IDE auto-suggestions allowed.",
      "Time limit: 2 hours.",
      "Judging based on accuracy, efficiency, and error-free code.",
    ],
  },
  {
    id: 3,
    title: "Squash The Bugs",
    description: "Hunt down errors and fix bugs quickly to win!",
    longDescription:
      "Squash the Bugs is an intense debugging competition where participants race to identify, analyze, and fix errors in code. The faster you squash the bugs, the higher you climb on the leaderboard. The event rewards speed, accuracy, and analytical thinking.",
    date: "March 22, 2025",
    time: "4 PM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg",
    rules: [
      "Solo participants only.",
      "No external tools or cheats allowed.",
      "Ethical guidelines must be followed.",
      "Flags must be submitted within the allotted time.",
    ],
  },
  {
    id: 4,
    title: "Code Auction",
    description: "Blend of strategy and coding with competitive bidding.",
    longDescription:
      "Code Auction challenges participants to strategize and bid wisely. Teams bid for different challenges and compete to solve them against the clock. Success depends not just on bidding high but bidding smart!",
    date: "March 23, 2025",
    time: "12 PM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/6476570/pexels-photo-6476570.jpeg",
    rules: [
      "Team size: 3-4 participants.",
      "Each team gets a virtual currency to bid.",
      "Challenges vary in difficulty and reward.",
      "Winning criteria: time efficiency, accuracy, and task completion.",
    ],
  },
  {
    id: 5,
    title: "Algoholics",
    description: "Test your algorithmic problem-solving with complex puzzles.",
    longDescription:
      "Algoholics is a competitive coding event designed to test algorithmic skills through complex puzzles. Participants must write optimized solutions focusing on time and space efficiency.",
    date: "March 24, 2025",
    time: "11 AM",
    tag: "Technical",
    image:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    rules: [
      "Team size: 2-3 members.",
      "Languages allowed: C++, Java, Python.",
      "Time limit: 3 hours.",
      "Solutions evaluated based on efficiency and correctness.",
    ],
  },
];


const nonTechnicalEvents = [
  {
    id: 6,
    title: "CHAKRAVYUH",
    description: "A thrilling treasure hunt filled with cryptic clues and riddles.",
    longDescription:
      "Chakravyuh is a thrilling campus-wide treasure hunt that tests participants' problem-solving skills. Teams decipher cryptic clues and uncover hidden treasures in this high-energy adventure.",
    date: "March 22, 2025",
    time: "11 AM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/7433866/pexels-photo-7433866.jpeg",
    rules: [
      "Team size: 2-4 participants.",
      "Clues must be solved sequentially.",
      "No internet assistance allowed.",
      "Fastest team to solve all clues wins.",
    ],
  },
  {
    id: 7,
    title: "DASTUR-E-MEHFIL",
    description: "Celebrate poetry and creativity in a multilingual contest.",
    longDescription:
      "Dastur-e-Mehfil is an expressive poetry competition that celebrates creativity and talent across multiple languages. Participants showcase their poetic prowess in a battle of words and emotions.",
    date: "March 23, 2025",
    time: "3 PM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg",
    rules: [
      "Individual participants only.",
      "Adhere to the allotted time.",
      "Original compositions are encouraged.",
      "Offensive or inappropriate language is strictly prohibited.",
    ],
  },
  {
    id: 8,
    title: "JHANKAR",
    description: "Group dance competition that showcases rhythm and grace.",
    longDescription:
      "Jhankar is an electrifying group dance competition where teams showcase rhythm, innovation, and creativity on stage. Participants captivate the audience with breathtaking performances and seamless synchronization.",
    date: "March 24, 2025",
    time: "1 PM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/2086812/pexels-photo-2086812.jpeg",
    rules: [
      "Team size: 4-8 members.",
      "Performance duration: 5-8 minutes.",
      "Props and music must be pre-approved.",
      "Judging criteria: choreography, synchronization, and creativity.",
    ],
  },
  {
    id: 9,
    title: "ROBO RACE",
    description: "Build and race your wireless bot through a challenging obstacle course!",
    longDescription:
      "Robo Race is an electrifying event where participants design, build, and control wireless robots to navigate a track filled with challenging obstacles. Teams will battle against the clock to complete the track while maintaining precision and avoiding penalties. Bots must pass through all checkpoints in the correct order and adhere to event specifications. The fastest team to complete the track while following all rules emerges victorious!",
    date: "March 25, 2025",
    time: "2 PM",
    tag: "Non-Technical",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    rules: [
      "The bot must be manually controlled and wireless.",
      "Dimensions: less than 25 cm x 25 cm (length x width) and height < 20 cm.",
      "Maximum permissible weight: 5 kg.",
      "Readymade Lego kits or similar will incur negative points.",
      "Shortcuts are strictly prohibited.",
      "Repairing is allowed, but bots must restart from the last checkpoint.",
      "The bot will be controlled by only one person, pre-identified by the organizers.",
      "Violation of rules or misconduct will result in immediate disqualification.",
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
