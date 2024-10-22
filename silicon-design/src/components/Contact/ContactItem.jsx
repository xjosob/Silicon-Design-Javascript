import React from "react";

const ContactItem = ({ imageSrc, title, description, linkText }) => {
  return (
    <div className="contact-element">
      <img
        src={imageSrc}
        alt={title}
        className={`${title.toLowerCase().replace("", "-")}-image`}
      />
      <div className={`${title.toLowerCase().replace("", "-")}-text`}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#" className="leave-message">
          {linkText}
          <span className="material-icons" aria-hidden="true">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
