import AccordianItem from "./AccordianItem.js"

const Accordian = () => {
    const faqData = [
      { question: "Q: What exactly is sankalan?", answer: "Sankalan is the annual technical festival of Department of Computer Science, University of Delhi. The fest blends a plethora of events including coding, quizzes, gaming, debates and a lot more events, it has something in store for everyone. It is entirely organised by the DUCS student body. To know more about it, please visit our about page." },
      { question: "Q: when is sankalan 2025 scheduled?", answer: "useState is a React Hook that allows you to add state to functional components." },
      { question: "Q: who can participate?", answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files." },
      { question: "Q: who can participate?", answer: "Props are used to pass data from a parent component to a child component." },
      { question: "Q: who can participate?", answer: "Props are used to pass data from a parent component to a child component." },
      { question: "Q: who can participate?", answer: "Props are used to pass data from a parent component to a child component." },
      { question: "Q: who can participate?", answer: "Props are used to pass data from a parent component to a child component." },
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