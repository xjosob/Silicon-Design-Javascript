import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { author, jobRole, starRating, avatarUrl, comment } = testimonial;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`material-icons ${i < rating ? "filled" : "unfilled"}`}
        >
          {i < rating ? "star" : "star_border"}
        </span>
      );
    }
    return stars;
  };
  return (
    <div className="testimonial-card">
      <div className="quote-icon">
        <img src="/icons/quote.svg" alt="Quote" />
      </div>
      <div className="testimonial-stars">{renderStars(starRating)}</div>
      <p className="testimonial-comment">{comment}</p>
      <div className="testimonial-author">
        <img src={avatarUrl} alt="Author" className="author-avatar" />
        <div className="author-details">
          <h4 className="author-name">{author}</h4>
          <p className="author-job">{jobRole}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
