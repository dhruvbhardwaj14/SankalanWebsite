import AccordianItem from "./AccordianItem.js"

const Accordian = () => {
    const faqData = [
      { question: "Q: WHAT EXACTLY IS SANKALAN ?", answer: "Sankalan is the annual technical festival of Department of Computer Science, University of Delhi. The fest blends a plethora of events including coding, quizzes, gaming, debates and a lot more events, it has something in store for everyone. It is entirely organised by the DUCS student body. To know more , please visit our About page." },
      { question: "Q: WHEN IS SANKALAN 2025 SCHEDULED ?", answer: "Sankalan 2025 will be organized in the Department of Computer Science, University of Delhi in April 2025. Some events will be taking place before the fest as well. Please checkout our Events page for more details." },
      { question: "Q: WHO CAN PARTICIPATE ?", answer: "Sankalan is a blend of technical as well as non-technical events. Go through the Events list to find your pick." },
      { question: "Q: Will non-Computer Science students be able to participate in the non-tech events ?", answer: "Yes, you are more than welcome to participate in non-tech events. They are open to all, doesn't matter if your background is CS or not." },
      { question: "Q: Is there online registration for events ?", answer: "Yes, you need to get registered online in order to participate in the Events of Sankalan. You can register in different events from here once registration starts." },
      { question: "Q: What are the prizes for the winners ?", answer: "The winners of the events will be awarded with exciting prizes. The details of the prizes will be updated soon." },
      { question: "Q: How should I reach Department of Computer Science ?", answer: "If you're coming from distance, reaching GTB Nagar Metro Station or Vishwavidyalaya Metro Station and then taking an e-rickshaw might be a good option for you. If you've trouble finding the venue location, you may look for following landmarks: Daulat Ram College, Shri Ram College or Faculty of Mathematical Sciences/Social Sciences." },
      { question: "Q: I have a question that was not answered here. What do I do ?", answer: "You can get in touch with the Sankalan team using the details on our Contact Us page." },
    ];
  
    return (
      <div className="accordion-container">
        {faqData.map((faq, index) => (
          <AccordianItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };
  
  export default Accordian;