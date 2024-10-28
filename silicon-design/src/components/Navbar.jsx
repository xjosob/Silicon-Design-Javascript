import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isContactPage ? "contact-navbar" : ""}>
      <div className="content-wrapper-nav">
        <Link to="/">
          <img src="logos/navbar-logo.svg" alt="Logo" className="logo" />
        </Link>
        <div className={`features-container ${isMenuOpen ? "open" : ""}`}>
          <ul className={`nav-items ${isMenuOpen ? "open" : ""}`}>
            <li className="features">
              <Link to="#">Features</Link>
            </li>
            <li className="contact">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <ul className="utility-items">
          <li className="theme-text">Dark Mode</li>
          <li className="toggle-container">
            <label className="switch" htmlFor="theme-toggle">
              <input
                type="checkbox"
                id="theme-toggle"
                checked={theme === "dark-theme"}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </li>
          <li className="sign-in-button">
            <button className="sign-in">
              <Link to="#" className="sign-in-link">
                <span className="icon material-icons">person_outlined</span>
                Sign in/up
              </Link>
            </button>
          </li>
          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          ></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
