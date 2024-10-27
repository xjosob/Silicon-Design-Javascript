import React from "react";
import { useState } from "react";
import Validation from "../services/Validation";
import { subscribeToAPI } from "../services/apiService";

const Subscribe = () => {
  function FormValidation() {
    const [values, setValues] = useState({
      email: "",
    });
    const [errors, setErrors] = useState({});

    const [success, setSuccess] = useState(false);

    function handleInput(e) {
      const newEmail = { ...values, [e.target.name]: e.target.value };
      setValues(newEmail);
      setSuccess(false);
      setErrors({});
    }

    async function handleValidation(e) {
      e.preventDefault();
      const ValidationErrors = Validation(values);
      setErrors(ValidationErrors);

      if (Object.keys(ValidationErrors).length === 0) {
        try {
          console.log("sending data to the api", values.email);

          await subscribeToAPI(values.email);

          console.log("data sent successfully");

          setSuccess(true);
          setErrors({});
          setValues({ email: "" });
        } catch (error) {
          console.log("error while subscribing", error);
          setErrors({ email: error.message });
          setSuccess(false);
        }
      } else {
        console.log("validation errors:", ValidationErrors);
        setSuccess(false);
      }
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
          <div
            className={`input-group ${
              errors.email ? "input-error" : success ? "input-success" : ""
            }`}
          >
            <span className="material-icons-outlined" aria-hidden="true">
              mail_outline
            </span>
            <input
              type="email"
              name="email"
              placeholder={
                errors.email
                  ? "Wrong input"
                  : success
                  ? "Successful input"
                  : "Your Email"
              }
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
            {success && (
              <>
                <span
                  className="material-icons-outlined success-icon show"
                  aria-hidden="true"
                >
                  check_circle
                </span>
                <p className="success-text show">You have been subscribed!</p>
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
