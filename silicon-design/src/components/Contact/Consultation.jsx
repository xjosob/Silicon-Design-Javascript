import React from "react";

const Consultation = () => {
  return (
    <div className="consultation">
      <div className="consultation-wrapper">
        <h3>Get Online Consultation</h3>
        <form id="consultation-form" aria-labelledby="consultation-form">
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email/adress">Email Adress</label>
            <input type="text" id="email/adress" name="email-adress" required />
          </div>
          <div className="form-group">
            <label htmlFor="specialist">Specialist</label>
            <select id="specialist" name="specialist" required>
              <option value="option-1"></option>
              <option value="option-2"></option>
            </select>
          </div>

          <button type="submit">Make an appointment</button>
        </form>
      </div>
    </div>
  );
};
export default Consultation;
