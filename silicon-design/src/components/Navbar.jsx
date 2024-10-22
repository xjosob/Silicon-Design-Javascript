import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="content-wrapper-nav">
        <a href="/index.html">
          <img src="logos/navbar-logo.svg" alt="Logo" className="logo" />
        </a>
        <div className="features-container">
          <ul>
            <li className="features">
              <a href="#">Features</a>
            </li>
            <li className="contact">
              <a href="/contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <ul>
          <li className="theme-text">Dark Mode</li>
          <li className="toggle-container">
            <label className="switch" htmlFor="theme-toggle">
              <input type="checkbox" id="theme-toggle" />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="sign-in-button">
            <button className="sign-in">
              <a href="#" className="sign-in-link">
                <span className="icon material-icons">person_outlined</span>
                Sign in/up
              </a>
            </button>
          </li>
          <div className="hamburger"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
