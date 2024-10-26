import React from "react";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="subscribe-content">
        <img
          src="icons/notification.svg"
          alt="Alert Icon"
          className="alert-icon"
        />
        <div className="subscribe-text">
          <h4>
            Subscribe to our newsletter to stay
            <br />
            informed about latest updates
          </h4>
        </div>
        <div className="subscribe-text-tablet">
          <h4>Subscribe to our newsletter</h4>
        </div>
      </div>

      <form className="subscribe-form">
        <div className="input-group">
          <span className="material-icons-outlined" aria-hidden="true">
            mail_outline
          </span>
          <input
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="email-input"
          />
        </div>
        <button type="submit" className="subscribe-btn">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
