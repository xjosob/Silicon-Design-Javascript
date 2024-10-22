import React, { useEffect } from "react";

const Navbar = () => {
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
