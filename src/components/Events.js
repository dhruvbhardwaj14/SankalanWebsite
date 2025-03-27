import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import "../styles/Components.css";
import EventCard from "./EventCard.js";

import hack from "../assets/PNG/hack.webp"
import robo from "../assets/PNG/robo.webp"
import algo from "../assets/PNG/alogholics.webp"
import blind from "../assets/PNG/blind.webp"
import chakra from "../assets/PNG/chakra.webp"
import auction from "../assets/PNG/auction.webp"
import feet from "../assets/PNG/feet.webp"
import bugs from "../assets/PNG/bugs.webp"
import dastur from "../assets/PNG/dastur.webp"
const technicalEvents = [
  {
    id: 1,
    title: "HACKDUCS",
    description: "⚡ HackDUCS 2025: Innovate, Compete, Dominate! 💻🏆",
    longDescription:
      "Embark on a coding odyssey at HackDUCS – Delhi University's epic hackathon where ideas evolve, friendships form, and innovation takes centre stage! Department of Computer Science, University of Delhi is organizing HackDUCS, a hybrid inter-university hackathon as part of its 21th Annual TechFest - Sankalan 2025 with a prize pool of more than ₹1,50,000!",
    date: "April 19, 2025",
    time: "TBA",
    tag: "Technical",
    image:
      hack,
    rules: [
      "Eligibility: College/University Students; Team Size: 1-4; Cross-college teams allowed.",  
      "Projects submitted to other hackathons will not be considered.",  
      "Preliminary Presentations: Online presentations on Google Meet / Zoom.",  
      "Time Limit: 12-15 mins (8 mins + questions).",  
      "Slides: Maximum of 12 slides; Formats: .pptx, .pdf.",  
      "Maximum of 5 teams from each track will be selected for demos.",  
      "Project Demonstration: In-person project demonstration at event venue. Time Limit: 12-15 mins.",  
      "Virtual participation may be allowed on a case-to-case basis.",  
      "Project must be submitted on Devfolio before the presentation begins.",  
      "Project source code must be hosted on a public repository on GitHub.",  
      "Short video demo needs to be uploaded on YouTube and submitted on Devfolio.",  
      "Ten teams qualify for Final Presentations.",  
      "Final Presentations: This round will be conducted for selected teams after the project demonstration round to allow them to work upon feedback received from the judges and enable them to put their best foot forward.",  
      "10-15 minutes will be given.",  
      "In-person presentation at event venue.",  
      "Qualified teams must arrange for travel and accommodation.",  
      "Food and beverages will be provided as part of the parent event."
    ],
  },
  {
    id: 2,
    title: "Blind Coding",
    description: "🔐 Think you can code without seeing the screen?",
    longDescription:`Prepare for an electrifying challenge where your coding prowess is pushed beyond limits. In this mind-bending competition, you'll tackle coding problems—but with a twist. Your code remains invisible, hidden from your screen, leaving you to rely solely on logic, memory, and pure problem-solving skills.Can you conquer the chaos, navigate the unseen, and emerge as the ultimate Blind Code Champion?`,
    date: "April 20, 2025",
    time: "TBA",
    tag: "Technical",
    image:
      blind,
    rules: [
      "Participation limited to college students(Ug/Pg).",
      "Team size: Lone wolves",
      "Languages Allowed: C, C++, Python, Java",
      "Participants can only write algorithms (in layman language) on the provided rough sheets. Writing actual code on the sheets will result in immediate disqualification.",
      "You have 60 minutes to solve three coding problems - two easy and 1 medium level",
      "Total marks for the problems is 60, with easy problems carrying 15 marks(2*15) and medium problems carrying 30 marks.(30+30 = 60)",
      "Exercise caution! Teams can briefly activate their screens thrice for 30 seconds each, but beware, as a penalty of 5 points will be incurred per activation, closely monitored by our organizers.",
      "Codes will be tested on certain test cases designed by us.",
      "Success and efficiency are key! Priority will be given to code that executes flawlessly with the most optimal solution and highest score.",
      "In the event of errors, elegance prevails! The second preference will go to code with the fewest errors.",
      "In the case of a tiebreaker, timing is everything. The submission time will serve as the final determinant.",
      "Decisions made by the event organizers will be final and binding.",

    ],
  },
  {
    id: 3,
    title: "Squash The Bugs",
    description: "🐛💻 Squash Bugs, Not Your Dreams! 🚀",
    longDescription:
      "Get ready for an intense debugging challenge where your problem-solving skills will be put to the test! In this competition, you'll be given faulty code snippets, and your task is to analyze, identify, and fix the bugs within the given time. Accuracy, efficiency, and speed will determine who emerges as the ultimate Bug Squasher!",
    date: "April 20, 2025",
    time: "TBA",
    tag: "Technical",
    image:bugs,
    rules: [
     "Participation is limited to college students (UG/PG).",  
    "Team Size: Solo participation.",  
    "You will have 30 minutes to debug all the programs.",  
    "Winners will be selected based on the number of errors debugged and on the time constraints.",  
    "Decisions made by the event organizers will be final and binding."
    ],
  },
  {
    id: 4,
    title: "Code Auction",
    description: "💻⚡ Bid. Code. Conquer. 🏆",
    longDescription:
      "Code Auction is a unique and exciting technical event that combines strategic bidding with competitive coding, where teams must bid on coding questions within a fixed budget before solving them to secure a top position. It offers participants the opportunity to showcase their coding skills while employing tactical decision-making through an auction system.The event aims to test participants' coding proficiency and their ability to make strategic bids to maximize their success.",
    date: "April 20, 2025",
    time: "TBA",
    tag: "Technical",
    image:
      auction,
    rules: [
      "Each team must have 3 to 4 members.",
      "The auctioning team members cannot participate in the coding round.",
      "The initial bidding purse is 120 points.",
      "Each question will have a base price, and teams must bid to acquire questions.",
      "A team must successfully purchase at least 3 questions to proceed to the coding round.",
      "Failure to buy at least 3 questions will result in elimination.",
      "Teams should plan their bids strategically, as no rebidding opportunities will be provided once their purse is exhausted.",
      "The coding round will be evaluated based on accuracy and completion time.",
      "The top 3 teams will be awarded prizes based on their performance."
    ],
  },
  {
    id: 5,
    title: "Algoholics",
    description: `🔥 "May your loops be infinite, and your stack never overflow!" 🔥`,
    longDescription:
      `The wait is over. The challenge is here. Welcome to ALCOHOLICS—the ultimate coding showdown at the Department of Computer Science, University of Delhi!
      Think you’ve mastered algorithms? Confident in your sorting wizardry? It’s time to prove it. Whether you're a rookie coder or a battle-hardened guardian of the code, this competition is for all.
      💡 The stakes? Low. The prizes? High.
      The problems will push your limits, testing not just your coding prowess but also your ability to optimize under pressure. Gigantic test cases await. Will your logic stand the test, or will your code crumble?
      It doesn't matter if you wield Python, C++, or Java—only the sharpest minds will survive and claim victory. 🏆
      💰 Bragging rights, algorithmic glory, and cool cash prizes are on the line. Do you have what it takes?
      🚀 Code. Compete. Conquer. 🚀`,
    date: "April 19, 2025",
    time: "TBA",
    tag: "Technical",
    image:algo,
    rules: [
      "Winners will be decided on the basis of the hackerrank leaderboard.",
      "There will be 3 winners (First, second and third). To be eligible for a cash prize, participants must have solved a minimum of 3 problems.",
      "No participant is allowed to use any LLM model like chatgpt, claude sonnet, deepseek, etc. However participants can use google or other sites to check for syntax and other related things",
      "Participants indulging in unfair practices shall be immediately debarred from the contest, and the decision of the organizing committee will be final.",
    ],
  },
  {
    id: 6,
    title: "Over Torque",
    description: "🤖🔥 Think your bot has got the heat? 💥🏆",
    longDescription:
      "Robo Race is an electrifying event where participants design, build, and control wireless robots to navigate a track filled with challenging obstacles. Teams will battle against the clock to complete the track while maintaining precision and avoiding penalties. Bots must pass through all checkpoints in the correct order and adhere to event specifications. The fastest team to complete the track while following all rules emerges victorious!",
    date: "April 20, 2025",
    time: "TBA",
    tag: "Non-Technical",
    image:
      robo,
      rules :[
        "Eligibility: Teams from any educational institute are eligible to participate. The competition is open to UG and PG students from any discipline. All participants must bring their respective ID cards.",
        "Team Specification: A maximum of 4 members per team is allowed.",
        "Team Name: Every team must have an appropriate name. Team names cannot be changed once submitted. Each team must specify their Team Representative (Leader) at the time of registration.",
        "Build a manually controlled wireless robot capable of finishing the race track while competing with an opponent bot.",
        "Players must run their bots through a path with obstacles that may either be active (potential structural damage) or passive (making the path tougher).",
        "Several checkpoints are set on the track, and bots must pass through these checkpoints in order. Returning to already crossed checkpoints is allowed if required.",
        "The bot should not harm the arena, and its design must strictly adhere to event rules.",
        "The final time will be recorded from crossing the start line to crossing the finish line.",
        "The player who finishes the track in the least time wins.",
        "All participants are required to submit a clear image of their robot for verification. This will be used to confirm eligibility and ensure compliance with event guidelines before proceeding to the next round.",
        "Freedom of mobility includes rolling (wheels, tracks, or the whole robot) and walking (linear actuated legs without rolling).",
        "Any method causing the robot to lose contact with the ground is not permitted.",
        "The bot must be manually controlled and wireless.",
        "Dimensions of the bot must be less than 30 cm x 30 cm (length x width), with a height of less than 20 cm. Zero tolerance.",
        "Maximum permissible weight: 5 kg.",
        "Readymade Lego kits or similar are allowed with negative points.",
        "The bot must complete the entire race track. Shortcuts are strictly prohibited.",
        "A bot is allowed to participate only once in the event.",
        "Teams will be allowed to test their robots on the track for a maximum of 2 minutes before the final run.",
        "Players cannot enter the arena unless permitted by the organizer.",
        "Players must not nudge or touch the bot once the race starts without prior permission; repairing is allowed but they have to start from the last checkpoint with an added time penalty.",
        "The bot will be controlled by only one person, whose identity must be communicated to the organizers beforehand.",
        "The coordinator/judge will decide in case of a dispute over the event.",
        "Time penalties will be applicable at the discretion of the judge.",
        "Any discrepancies in rules will be resolved by the organizers and jury. Their decision will be final and binding.",
        "The organizers reserve the right to change or modify rules as deemed necessary.",
        "The organizing committee is not responsible for any damage to bots on or off the track.",
        "Participants must not make assumptions not mentioned in the document without clarifying with the organizers.",
        "Violation of rules or misconduct will result in disqualification."
      ]
  },
];


const nonTechnicalEvents = [
  {
    id: 7,
    title: "CHAKRAVYUH",
    description:"🚪💡 The only way out is through. 🏆🔥",
    longDescription:
      "Chakravyuh is a thrilling campus-wide treasure hunt that tests participants' problem-solving skills. Teams decipher cryptic clues and uncover hidden treasures in this high-energy adventure.",
    date: "April 19, 2025",
    time: "TBA",
    tag: "Non-Technical",
    image:
      chakra,
    rules: [
      "There's only one rule: be the first team to find all the clues and claim victory!",
    ],
  },
  {
    id: 8,
    title: "DASTUR-E-MEHFIL",
    description: `✒️ Alfaazon ka safar, jazbaat ka manzar,
                  Dastur-e-Mehfil mein har shayar hai asar. 🎙️✨`,
    longDescription:
      `Poetry is the voice of the soul, an art that transcends barriers and brings emotions to life. Mehfil is an inter-college poetry competition that welcomes all college students to express themselves through the beauty of words. With an open theme, participants have the freedom to weave their thoughts into compelling verses that resonate with the audience.
      The competition consists of two rounds: a preliminary selection and a live performance. Aspiring poets will first submit their pieces online, and the most impactful submissions will be chosen for the final round. In the grand finale, selected poets will perform their pieces live before a panel of esteemed judges and an engaged audience.
      Participants can choose to present their poetry in either Hindi or English, and the winners will be decided regardless of the language based on the overall performance scores provided by the judges.`,
    date: "April 19, 2025",
    time: "TBA",
    tag: "Non-Technical",
    image:
      dastur,
      rules :[
        "Eligibility: The competition is open to all college students (including students from other colleges).",
        "Poetry Submission: The theme of the poetry is open, allowing participants complete creative freedom.",
        "Submissions must be made through the provided Google Form within the deadline.",
        "Plagiarism is strictly prohibited. All pieces must be self-written; plagiarized entries will be disqualified.",
        "Performance Guidelines: Time Limit: Each performance must be between 3 to 5 minutes.",
        "Poets must perform their own written piece—recitations of others' works are not allowed.",
        "Judging Criteria: Poets will be judged on content, creativity, originality, delivery, and overall impact.",
        "The judging panel will consist of qualified persons from the English and Hindi departments.",
        "Code of Conduct: The content must not be offensive towards any religion, caste, gender, or community. Any entry that violates this rule will be immediately disqualified.",
        "Participants must maintain a respectful and inclusive environment."
      ],
  },
  {
    id: 9,
    title: "FEETS ON FIRE",
    description: "💃🔥 Unleash the Rhythm, Own the Stage! 🕺✨",
    longDescription:
      "Join us for an electrifying Group Dance Competition where rhythm meets passion! Witness teams set the fire with their synchronized moves, dynamic formations and captivating performances. This is your chance to experience the energy, creativity and teamwork of talented dancers as they compete for the top spot. “Get ready to groove ,cheer and be amazed!",
    date: "April 20, 2025",
    time: "TBA",
    tag: "Non-Technical",
    image:feet,
    rules: [
      "Teams must consist of minimum 5 members and at max 12 members.",  
      "Each team is allotted 5-7 minutes to showcase their talent, bring the best in you.",  
      "Slots are allocated on a first-come, first-serve basis, urging teams to register promptly to secure their participation.",  
      "Participants are required to submit their performance music at least two days before the event to facilitate smooth coordination during the competition.",  
      "A strict policy against disruptive behavior is enforced, both backstage and during performances, to maintain a positive and respectful environment.",  
      "Teams are encouraged to express their unique styles and creativity, making each performance a celebration of dance artistry. Teams are allowed to use more than one song in their dance sequence.",  
      "The props are allowed and have to be carried by participants.",  
      "Performances will be evaluated based on factors such as costumes, choreography, synchronization, creativity, and overall stage presence.",  
      "Any breach of the 'no nuisance' policy may result in penalties or even disqualification, emphasizing the importance of maintaining a professional and respectful atmosphere.",  
      "Reporting time: 4:30 PM.",  
      "Each participant should carry their college ID card with them.",  
      "Participants are required to share their account details through a form for transfer of prize money to winners.",  
      "One member from each team needs to register themselves representing the whole team."
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
