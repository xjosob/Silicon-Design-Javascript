import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-theme";
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
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
