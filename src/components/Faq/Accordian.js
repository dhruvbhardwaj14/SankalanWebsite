// src/components/Accordian.js
import AccordianItem from "./AccordianItem.js";
import { faqData } from "../../data/faqData.js";

const Accordian = () => {
  return (
    <div className="accordion-container">
      {faqData.map((faq, index) => (
        <AccordianItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Accordian;
