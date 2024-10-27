export default function Validation(values) {
  const errors = {};

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const fullNamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (!values.fullName || values.fullName.trim() === "") {
    errors.fullName = "Full name is required.";
  } else if (!fullNamePattern.test(values.fullName)) {
    errors.fullName = "Please enter both first and last name.";
  }

  if (values.email === "") {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please provide a valid input.";
  }

  if (!values.specialist || values.specialist.trim() === "") {
    errors.specialist = "Please select a specialist.";
  }
  return errors;
}
