import React from "react";
import Breadcrumb from "./Breadcrumb";
import ContactInfo from "./ContactInfo";
import Consultation from "./Consultation";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <div className="contact-us-container">
        <Breadcrumb />
        <div className="contact-elements">
          <ContactInfo />
          <Consultation />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
