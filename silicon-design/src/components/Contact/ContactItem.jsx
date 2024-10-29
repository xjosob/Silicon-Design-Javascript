import React from "react";

const ContactItem = ({ imageSrc, title, description, linkText }) => {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="contact-element">
      <div className={`${formattedTitle}-header`}>
        <img src={imageSrc} alt={title} className={`${formattedTitle}-image`} />
        <div className={`${formattedTitle}-text`}>
          <h4>{title}</h4>
        </div>
      </div>
      <p>{description}</p>
      <a href="#" className="leave-message">
        {linkText}
        <span className="material-icons" aria-hidden="true">
          arrow_forward
        </span>
      </a>
    </div>
  );
};

export default ContactItem;
