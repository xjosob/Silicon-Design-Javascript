import React from "react";
import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h1>Contact Us</h1>
      <ContactItem
        imageSrc="/icons/email-us.svg"
        title="Email us"
        description="Please feel free to drop us a line. We will respond as soon as possible."
        linkText="Leave a message"
      />
      <ContactItem
        imageSrc="/icons/careers.svg"
        title="Careers"
        description="Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum."
        linkText="Send an application"
      />
    </div>
  );
};

export default ContactInfo;
