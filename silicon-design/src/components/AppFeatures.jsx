import React from "react";

const AppFeatures = () => {
  return (
    <section id="app-features">
      <img
        src="images/app-features-phone.svg"
        className="phone-visa"
        alt="Phone"
      />
      <div className="features-content">
        <h1 className="features-title">App Features</h1>
        <p className="features-subtitle">
          Lorem ipsum dolor sit amet, concectetur elit. Proin volutpat mollis
          egestas. Nam luctus facillisis ultices. Pellentesque volutpat ligula
          est. Mattis fermentim, at nec lacus.
        </p>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">
              <img src="icons/easy-payments.svg" alt="Easy Payments Icon" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Easy Payments</h3>
              <p className="feature-description">
                Id mollis consectetur congue egestas egestas suspendisse blandit
                justo.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src="icons/data-security.svg" alt="Data-Security" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Data Security</h3>
              <p className="feature-description">
                Augue pulvinar justo, fermentum fames aliquam accumsan
                vestibulum non.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src="icons/cost-statistics.svg" alt="Cost Statistics" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Cost Statistics</h3>
              <p className="feature-description">
                Mattis urna ultricies non amet, purus in auctor non. Odio
                vulputate ac nibh.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src="icons/support.svg" alt="Support 24/7" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Support 24/7</h3>
              <p className="feature-description">
                A elementum, imperdiet enim, pretium etiam facilisi in aenean
                quam mauris.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src="icons/regular-cashback.svg" alt="Regular Cashback" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Regular Cashback</h3>
              <p className="feature-description">
                Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                imperdiet eleifend.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src="icons/top-standards.svg" alt="Top Standards" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Top Standards</h3>
              <p className="feature-description">
                Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id.
                Sit facilisis dolor arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
