import React, { useEffect, useState } from "react";
import { fetchFAQ } from "../services/apiService";

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFAQ();
        setFaqData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const toggleFAQ = (id) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq-section">
      <div className="faq-contact-container">
        <div className="faq-section-titles-container">
          <h2 className="faq-title">Any questions? Check out the FAQs</h2>
          <p className="faq-subtitle">
            Still have unanswered questions and need to get in touch?
          </p>
        </div>
        <div className="contact-image-box">
          <img
            src="/images/icon-box.svg"
            alt="Contact Icon"
            className="icon-box"
          />
          <img
            src="/images/icon-box-2.svg"
            alt="Contact Icon"
            className="icon-box-2"
          />
        </div>
      </div>

      <div className="faq-questions-container">
        {error ? (
          <p>{error}</p>
        ) : faqData.length > 0 ? (
          faqData.map((faq) => (
            <div
              key={faq.id}
              className={`faq-question ${
                expandedFAQ[faq.id] ? "expanded" : ""
              }`}
            >
              <div
                className="faq-question-title-container"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="faq-question-title">{faq.title}</h3>
                <button
                  className={`material-icons faq-chevron ${
                    expandedFAQ === faq.id ? "expanded" : ""
                  }`}
                  aria-label="Expand FAQ"
                >
                  chevron_right
                </button>
              </div>
              <p className="faq-answer">{faq.content}</p>
            </div>
          ))
        ) : (
          <p>Loading FAQs...</p>
        )}
      </div>
      <button className="contact-button">Contact us now</button>
    </section>
  );
};

export default FAQ;
