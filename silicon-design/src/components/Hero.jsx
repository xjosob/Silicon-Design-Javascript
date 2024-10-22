import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content-wrapper-hero">
        <div className="hero-content">
          <div className="hero-container">
            <h1 className="hero-title">
              Manage All Your
              <br />
              Money in One App
            </h1>
            <p className="hero-subtitle">
              We offer you a new generation of the mobile banking.
              <br />
              Save, spend & manage money in your pocket.
            </p>
            <div className="mobile-buttons-wrapper">
              <button
                className="mobile-button-app-store"
                aria-label="App Store"
              ></button>
              <button
                className="mobile-button-google-play"
                aria-label="Google Play"
              ></button>
            </div>
            <div className="market-buttons-container">
              <button
                className="button-app-store"
                aria-label="App Store"
              ></button>
              <button
                className="button-google-play"
                aria-label="Google Play"
              ></button>
            </div>
          </div>
          <div className="hero-phones">
            <img src="images/hero-phones.svg" alt="Phones" />
          </div>
        </div>
        <div className="discover-more-container">
          <button className="discover-more-button" aria-label="Discover More">
            <span className="material-icons">chevron_right</span>
          </button>
          <span className="discover-more-text">Discover More</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
