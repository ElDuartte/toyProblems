const chai = require("chai");
const assert = chai.assert;

const removeChar = require("../22-remove-char.js");

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("eloquent"), "loquen");
    assert.strictEqual(removeChar("country"), "ountr");
    assert.strictEqual(removeChar("person"), "erso");
    assert.strictEqual(removeChar("place"), "lac");
    assert.strictEqual(removeChar("ooopsss"), "oopss");
    assert.strictEqual(removeChar("10"), "");
  });
});
