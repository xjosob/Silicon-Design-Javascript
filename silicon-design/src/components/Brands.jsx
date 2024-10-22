import React from "react";

const Brands = () => {
  return (
    <section id="brands">
      <div className="brands-container">
        <div id="brand-1" className="brand-box">
          <img src="logos/brand1.svg" className="brand-box" alt="Brand 1" />
        </div>
        <div id="brand-2" className="brand-box">
          <img src="logos/brand2.svg" className="brand-box" alt="Brand 2" />
        </div>
        <div id="brand-3" className="brand-container">
          <img src="logos/brand3.svg" className="brand-box" alt="Brand 3" />
        </div>
        <div id="brand-4" className="brand-container">
          <img src="logos/brand4.svg" className="brand-box" alt="Brand 4" />
        </div>
        <div id="brand-5" className="brand-container">
          <img src="logos/brand5.svg" className="brand-box" alt="Brand 5" />
        </div>
        <div id="brand-6" className="brand-container">
          <img src="logos/brand6.svg" className="brand-box" alt="Brand 6" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
