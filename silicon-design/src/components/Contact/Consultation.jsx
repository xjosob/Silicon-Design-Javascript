import React, { useState } from "react";
import { sendConsultationData } from "../../services/apiService";
import Validation from "../../services/Validation";

const Consultation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialist: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({});
    setSuccessMessage("");
  };

  const handleValidation = async (e) => {
    e.preventDefault();

    const ValidationErrors = Validation(formData);
    setErrors(ValidationErrors);

    if (Object.keys(ValidationErrors).length > 0) {
      console.log("validation errors:", ValidationErrors);
      return;
    }

    try {
      console.log("sending data to the api");

      await sendConsultationData(formData);

      console.log("consultation request successfully sent");
      setSuccessMessage("Your consultation request has been sent!");

      setFormData({ fullName: "", email: "", specialist: "" });
    } catch (error) {
      console.log("error while sending consultation request:", error);
      setErrors({
        api: "failed to send the consultation request. Please try again.",
      });
    }
  };
  return (
    <div className="consultation">
      <div className="consultation-wrapper">
        <h3 id="consultation-heading>">Get Online Consultation</h3>
        <form id="consultation-form" onSubmit={handleValidation} noValidate>
          <div
            className={`form-group ${
              errors.fullName
                ? "input-error"
                : successMessage
                ? "input-success"
                : ""
            }`}
          >
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInput}
              placeholder={
                successMessage ? "Successful input" : "Your first and last name"
              }
              required
            />
            {errors.fullName && (
              <>
                <span className="material-icons-outlined error-icon show">
                  cancel
                </span>
                <p className="error-text show">{errors.fullName}</p>
              </>
            )}
            {successMessage && (
              <>
                <span className="material-icons-outlined success-icon show">
                  check_circle
                </span>
              </>
            )}
          </div>
          <div
            className={`form-group ${
              errors.email
                ? "input-error"
                : successMessage
                ? "input-success"
                : ""
            }`}
          >
            <label htmlFor="email">Email Adress</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder={successMessage ? "Successful input" : "Your email"}
              required
            />
            {errors.email && (
              <>
                <span className="material-icons-outlined error-icon show">
                  cancel
                </span>
                <p className="error-text show">{errors.email}</p>
              </>
            )}
            {successMessage && (
              <>
                <span className="material-icons-outlined success-icon show">
                  check_circle
                </span>
              </>
            )}
          </div>
          <div
            className={`form-group ${
              errors.specialist
                ? "input-error"
                : successMessage
                ? "input-success"
                : ""
            }`}
          >
            <label htmlFor="specialist">Specialist</label>
            <select
              id="specialist"
              name="specialist"
              value={formData.specialist}
              onChange={handleInput}
              required
            >
              <option value="">Select a specialist</option>
              <option value="option-1">Specialist A</option>
              <option value="option-2">Specialist B</option>
              <option value="option-3">Specialist C</option>
            </select>
            {errors.specialist && (
              <>
                <p className="error-text show">{errors.specialist}</p>
              </>
            )}

            {successMessage && (
              <>
                <p className="success-text show">{successMessage}</p>
              </>
            )}
          </div>

          <button type="submit">Make an appointment</button>
        </form>
      </div>
    </div>
  );
};
export default Consultation;
