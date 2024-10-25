import React, { useEffect, useState } from "react";
import { fetchTestimonials } from "../services/apiService";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <section id="testimonials">
      <div className="testimonials-container">
        <h1 className="clients-loving">Clients are Loving Our App</h1>
        <div className="testimonials-container">
          {error ? (
            <p>{error}</p>
          ) : testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))
          ) : (
            <p>Loading tetsimonials</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
