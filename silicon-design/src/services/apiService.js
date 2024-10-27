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

export const subscribeToAPI = async (email) => {
  try {
    console.log("attempting to subscribe with email:", email);
    const response = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to subscribe. Plese try again later");
    }

    console.log("api response status:", response.status);
    return response;
  } catch (error) {
    console.log("api error:", error);
    throw error;
  }
};

export const sendConsultationData = async (data) => {
  try {
    console.log("sending consultation data to the api:", data);

    const response = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send consultation data");
    }

    console.log("conutation data sent successfully");
    return response;
  } catch (error) {
    console.log("api error:", error);
    throw error;
  }
};
