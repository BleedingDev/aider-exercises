function log(message) {
  console.log(`Log: ${message}`);
}

function format(input) {
  return input.trim();
}

module.exports = {
  log,
  format,
};
