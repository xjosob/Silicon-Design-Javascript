import React from "react";

const FAQ = () => {
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
        <div className="faq-question">
          <h3 className="faq-question-title">
            Is any of my personal information stores in the App?
          </h3>
          <button
            className="material-icons faq-chevron"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question">
          <h3 className="faq-question-title">
            What formats can I download my transaction history in?
          </h3>
          <button
            className="material-icons faq-chevron"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question-expanded">
          <div className="faq-question-title-container">
            <h3 className="faq-question-title">
              Can I schedule future transfers?
            </h3>
            <button
              className="material-icons faq-chevron"
              aria-label="Collapse FAQ"
            >
              chevron_right
            </button>
          </div>
          <p className="faq-answer">
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
        </div>
        <div className="faq-question">
          <h3 className="faq-question-title">
            When can I use Banking App services?
          </h3>
          <button
            className="material-icons faq-chevron"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question">
          <h3 className="faq-question-title">
            Can I create my own password that is easy for me to remember?
          </h3>
          <button
            className="material-icons faq-chevron"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question">
          <h3 className="faq-question-title">
            What happens if I forget or lose my password?
          </h3>
          <button
            className="material-icons faq-chevron"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
      </div>
      <div className="faq-contact-container-tablet">
        <div className="faq-section-titles-container-tablet">
          <h2 className="faq-title-tablet">
            Any questions?
            <br />
            Check out the FAQs
          </h2>
          <p className="faq-subtitle-tablet">
            Still have unanswered questions and need to get
            <br />
            in touch?
          </p>
        </div>
      </div>

      <div className="faq-questions-container-tablet">
        <div className="faq-question-tablet">
          <h3 className="faq-question-title-tablet">
            Is any of my personal information stored in the App?
          </h3>
          <button
            className="material-icons faq-chevron-tablet"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question-tablet">
          <h3 className="faq-question-title-tablet">
            What formats can I download my transaction history in?
          </h3>
          <button
            className="material-icons faq-chevron-tablet"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question-expanded-tablet">
          <div
            className="faq-question-title-container-tablet"
            aria-label="Collapse FAQ"
          >
            <h3 className="faq-question-title-tablet">
              Can I schedule future transfers?
            </h3>
            <button className="material-icons faq-chevron-tablet">
              chevron_right
            </button>
          </div>
          <p className="faq-answer-tablet">
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
        </div>
        <div className="faq-question-tablet">
          <h3 className="faq-question-title-tablet">
            When can I use Banking App services?
          </h3>
          <button
            className="material-icons faq-chevron-tablet"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question-tablet">
          <h3 className="faq-question-title-tablet">
            Can I create my own password that is easy for me to remember?
          </h3>
          <button
            className="material-icons faq-chevron-tablet"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="faq-question-tablet">
          <h3 className="faq-question-title-tablet">
            What happens if I forget or lose my password?
          </h3>
          <button
            className="material-icons faq-chevron-tablet"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <div className="contact-image-box-tablet">
          <img
            src="/images/icon-box-tablet.svg"
            className="icon-box-tablet"
            alt="Contact Icon"
          />
          <img
            src="/images/icon-box-2-tablet.svg"
            className="icon-box-2-tablet"
            alt="Contact Icon"
          />
        </div>
      </div>
      <div className="faq-contact-container-mobile">
        <div className="faq-section-titles-container-mobile">
          <h2 className="faq-title-mobile">
            Any questions? Check out the FAQs
          </h2>
          <p className="faq-subtitle-mobile">
            Still have unanswered questions and need to get in touch?
          </p>
        </div>
      </div>
      <div className="faq-questions-container-mobile">
        <div className="faq-question-expanded-mobile">
          <div className="faq-question-title-container-mobile">
            <h3 className="faq-question-title-mobile">
              Is any of my personal information stored in the App?
            </h3>
            <button
              className="material-icons faq-chevron-mobile"
              aria-label="Collapse FAQ"
            >
              chevron_right
            </button>
          </div>
          <p className="faq-answer-mobile">
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
          <p className="faq-answer-mobile">
            Ornare senectus fusce dignissim ut. Integer consequat in eu tortor,
            faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse
            lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus
            lacus, elit leo elit facilisi. Dignissim amet adipiscing massa
            integer.
          </p>
        </div>
        <hr />
        <div className="faq-question-mobile">
          <h3 className="faq-question-title-mobile">
            What formats can I donwload my transaction history in?
          </h3>
          <button
            className="material-icons faq-chevron-mobile"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <hr />
        <div className="faq-question-mobile">
          <h3 className="faq-question-title-mobile">
            Can I schedule future transfers?
          </h3>
          <button
            className="material-icons faq-chevron-mobile"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <hr />
        <div className="faq-question-mobile">
          <h3 className="faq-question-title-mobile">
            When can I use Banking App services?
          </h3>
          <button
            className="material-icons faq-chevron-mobile"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <hr />
        <div className="faq-question-mobile">
          <h3 className="faq-question-title-mobile">
            Can I create my own password that is easy for me to remember?
          </h3>
          <button
            className="material-icons faq-chevron-mobile"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
        <hr />
        <div className="faq-question-mobile">
          <h3 className="faq-question-title-mobile">
            What happens if I forget or lose my password?
          </h3>
          <button
            className="material-icons faq-chevron-mobile"
            aria-label="Expand FAQ"
          >
            chevron_right
          </button>
        </div>
      </div>
      <button className="contact-button">Contact us now</button>
    </section>
  );
};

export default FAQ;
