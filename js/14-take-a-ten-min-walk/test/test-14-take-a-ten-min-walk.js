const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const isValidWalk = require("../14-take-a-ten-min-walk.js");

describe("Tests", () => {
  it("It returns to the same position == true", () => {
    //some test cases for you...
    assert.strictEqual(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      true
    );
  });
  it("The walk is to long == false", () => {
    assert.strictEqual(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
      false
    );
  });
  it("Not enough minutes and not in the same position", () => {
    assert.strictEqual(isValidWalk(["w"]), false);
  });
  it("Didn't finish in the same position", () => {
    assert.strictEqual(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
      false
    );
  });
});
