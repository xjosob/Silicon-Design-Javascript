import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark"
    ).matches;

    const defaultTheme =
      savedTheme || (prefersDarkScheme ? "dark-theme" : "light-theme");
    setTheme(defaultTheme);
    document.body.classList.add(defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
