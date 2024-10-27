export default function Validation(values) {
  const errors = {};

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  if (values.email === "") {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please provide a valid input.";
  }

  return errors;
}
