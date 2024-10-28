import React from "react";
import AdressList from "./AddressList";
import SocialIcons from "./SocialIcons";
import MapComponent from "./MapComponent";

const MapSection = () => {
  return (
    <section id="map-section">
      <div className="map-container">
        <MapComponent />
        <div className="addresses">
          <AdressList />
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
