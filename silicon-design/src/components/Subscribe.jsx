import React from "react";
import { useState } from "react";
import Validation from "../services/Validation";

const Subscribe = () => {
  function FormValidation() {
    const [values, setValues] = useState({
      email: "",
    });

    const [errors, setErrors] = useState({});

    function handleInput(e) {
      const newEmail = { ...values, [e.target.name]: e.target.value };
      setValues(newEmail);
    }

    function handleValidation(e) {
      e.preventDefault();
      const ValidationErrors = Validation(values);
      setErrors(ValidationErrors);
      setValues({ email: "" });
    }

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

        <form className="subscribe-form" onSubmit={handleValidation} noValidate>
          <div className={`input-group ${errors.email ? "input-error" : ""}`}>
            <span className="material-icons-outlined" aria-hidden="true">
              mail_outline
            </span>
            <input
              type="email"
              name="email"
              placeholder={errors.email ? "Wrong input" : "Your Email"}
              aria-label="Your Email"
              className="email-input"
              onChange={handleInput}
              value={values.email}
            />
            {errors.email && (
              <>
                <span
                  className="material-icons-outlined error-icon show"
                  aria-hidden="true"
                >
                  cancel
                </span>
                <p className="error-text show">{errors.email}</p>
              </>
            )}
          </div>
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </section>
    );
  }
  return <FormValidation />;
};

export default Subscribe;
