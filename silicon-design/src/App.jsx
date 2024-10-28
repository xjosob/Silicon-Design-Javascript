import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar isContactPage={location.pathname === "/contact"} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home />
              </main>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
