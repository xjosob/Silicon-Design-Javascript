import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <Link to="/" className="breadcrumb-link" aria-label="Go to Homepage">
        <span className="material-icons-outlined">home</span> Homepage
      </Link>
      <span className="breadcrumb-divider" aria-hidden="true">
        &raquo;
      </span>
      <span className="breadcrumb-current">Contact</span>
    </div>
  );
};

export default Breadcrumb;
