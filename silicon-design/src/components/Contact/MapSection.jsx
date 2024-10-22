import React from "react";
import AdressList from "./AddressList";
import SocialIcons from "./SocialIcons";

const MapSection = () => {
  return (
    <section id="map-section">
      <div className="map-container">
        <img src="/images/map.svg" alt="Map" />
        <div className="addresses">
          <AdressList />
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
