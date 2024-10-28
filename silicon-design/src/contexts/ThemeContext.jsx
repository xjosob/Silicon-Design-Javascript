import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark"
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    const defaultTheme = savedTheme
      ? savedTheme
      : prefersDarkScheme
      ? "dark-theme"
      : "light-theme";
    document.body.classList.add(defaultTheme);

    if (themeToggle) {
      themeToggle.checked = defaultTheme === "dark-theme";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
