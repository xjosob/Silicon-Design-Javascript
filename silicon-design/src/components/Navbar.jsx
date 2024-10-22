import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme") || "light-theme";
    const body = document.body;

    body.classList.add(savedTheme);

    const handleThemeToggle = () => {
      if (themeToggle.checked) {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark-theme");
      } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light-theme");
      }
    };

    if (themeToggle) {
      themeToggle.checked = savedTheme === "dark-theme";
      themeToggle.addEventListener("change", handleThemeToggle);
    }

    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener("change", handleThemeToggle);
      }
    };
  }, []);

  return (
    <nav className={isContactPage ? "contact-navbar" : ""}>
      <div className="content-wrapper-nav">
        <Link to="/">
          <img src="logos/navbar-logo.svg" alt="Logo" className="logo" />
        </Link>
        <div className="features-container">
          <ul>
            <li className="features">
              <Link to="#">Features</Link>
            </li>
            <li className="contact">
              <Link to="/contact">Contact</Link>
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
              <Link to="#" className="sign-in-link">
                <span className="icon material-icons">person_outlined</span>
                Sign in/up
              </Link>
            </button>
          </li>
          <div className="hamburger"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
