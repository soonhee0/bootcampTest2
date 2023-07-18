'use strict'

function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
		console.log("  actual: ", actual);
    console.log("expected: ", expected);
    console.log("Test Passed.");
    console.log(" ");
  } else {
    console.error("Test Failed.");
    console.log("  actual: ", actual);
    console.log("expected: ", expected);
    console.log(" ");
    console.trace();
  }
}