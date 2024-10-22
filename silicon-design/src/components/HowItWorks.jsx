import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="how-it-works-container">
        <h1 className="how-it-works-title">How Does It Work?</h1>
        <div className="how-it-works-images">
          <img
            src="images/Iphone 12 Pro Tablet.svg"
            className="iphone-tablet-1"
            alt="Iphone"
          />
          <img
            src="images/Iphone 12 Pro Tablet 2.svg"
            className="iphone-tablet-2"
            alt="Iphone"
          />
          <img
            src="images/Iphone 12 Pro 3 Tablet.svg"
            className="iphone-tablet-3"
            alt="Iphone"
          />
          <img
            src="images/Iphone 12 Pro mobile.svg"
            className="iphone-mobile"
            alt="Iphone"
          />
          <img
            src="images/iPhone 12 Pro.svg"
            className="iphone-1"
            alt="Iphone"
          />
          <img src="images/Change This.svg" className="iphone-2" alt="Iphone" />
          <img
            src="images/Change This-2.svg"
            className="iphone-3"
            alt="Iphone"
          />
        </div>
        <h4 className="how-it-works-subtitle">Latest transaction history</h4>
        <h4 className="how-it-works-subtitle-mobile">
          Transfer to people from your contant list
        </h4>
        <h4 className="how-it-works-subtitle-tablet">
          Step 3. Transfers to people from your contact list
        </h4>
        <p className="how-it-works-text">
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu
          sociis tristique
          <br />
          quisque hac in consectetur condimentum.
        </p>
        <p className="how-it-works-text-mobile">
          Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
          Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
