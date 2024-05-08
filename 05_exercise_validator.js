const { log, format } = require("./05_exercise_utils");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  email = format(email);
  const isValid = emailRegex.test(email);
  log(`Email validation result for ${email}: ${isValid}`);
  return isValid;
}

function validatePhone(phone) {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  phone = format(phone);
  const isValid = phoneRegex.test(phone);
  log(`Phone validation result for ${phone}: ${isValid}`);
  return isValid;
}

module.exports = {
  validateEmail,
  validatePhone,
};
