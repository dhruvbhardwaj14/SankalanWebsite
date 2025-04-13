import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const faqData = [
  {
    question: "Q: What exactly is Sankalan?",
    answer:
      "Sankalan is the annual technical festival of the Department of Computer Science, University of Delhi. The fest blends a plethora of events including coding, quizzes, gaming, debates, and a lot more. It has something in store for everyone. It is entirely organized by the DUCS student body. To know more about it, please visit our about page.",
  },
  {
    question: "Q: When is Sankalan 2025 scheduled?",
    answer:
      "Sankalan 2025 is scheduled to be announced soon. Stay tuned for updates on our official website and social media pages.",
  },
  {
    question: "Q: Who can participate?",
    answer:
      "Students from various universities and colleges are welcome to participate in the events of Sankalan. Specific event eligibility criteria will be mentioned in the event details.",
  },
];

const FaqSection = () => {
  return (
    <div className="mainPage">
      <div className="Parallax">
        <div className="content">
          <h1 className="Section-heading">Frequently Asked Questions</h1>
          <div className="accordion" id="faqAccordion">
            {faqData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mainPage {
          position: relative;
          height: 100vh;
        }
        .Parallax {
          background-image: url("../assets/PNG/backgroundOthers.webp");
          background-color: #1c254c;
          background-size: cover;
          background-position: center;
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
        }
        .faq-heading {
          color: white;
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 2rem;
          margin-top: 10%;
        }
        .accordion {
          width: 80%;
          max-width: 800px;
        }
        .accordion-item {
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .accordion-button {
          background-color: #ffffff;
          font-weight: bold;
        }
        .accordion-button:focus {
          box-shadow: none;
        }
      `}</style>
    </div>
  );
};

export default FaqSection;
