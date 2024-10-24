export const fetchFAQ = async () => {
  const response = await fetch(
    "https://win24-assignment.azurewebsites.net/api/faq"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch FAQ");
  }
  return response.json();
};
export const fetchTestimonials = async () => {
  const response = await fetch(
    "https://win24-assignment.azurewebsites.net/api/testimonials"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Testimonials");
  }
  return response.json();
};
