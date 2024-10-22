import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials-container">
        <h1 className="clients-loving">Clients are Loving Our App</h1>
        <div className="testimonial-images">
          <img
            src="/images/testimonial.svg"
            alt="Testimonials Image 1"
            className="testimonial-image"
          />
          <img
            src="/images/testimonial-2.svg"
            alt="Testimonials Image 2"
            className="testimonial-image-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
