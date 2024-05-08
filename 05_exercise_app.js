const { validateEmail, validatePhone } = require("./05_exercise_validator");

function main() {
  const emailInput = "example@example.com";
  const phoneInput = "1234567890";

  console.log(`Validating Email: ${emailInput}`);
  const emailIsValid = validateEmail(emailInput);
  console.log(`Email Valid: ${emailIsValid}`);

  console.log(`Validating Phone: ${phoneInput}`);
  const phoneIsValid = validatePhone(phoneInput);
  console.log(`Phone Valid: ${phoneIsValid}`);
}

main();
