const addNumbers = require("./03_exercise");
const assert = require("assert");

function runTest() {
  try {
    assert.strictEqual(
      addNumbers(2, 3),
      5,
      "Expected addNumbers(2, 3) to return 5"
    );
    console.log("Test passed.");
  } catch (error) {
    console.error("Test failed:", error.message);
  }
}

runTest();
