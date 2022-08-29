const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const parseInt = require("../20-parseint.js");

describe("Tests", () => {
  it("test one", () => {
    assert.strictEqual(parseInt("one"), 1);
  });
});

describe("test 2", () => {
  it("test twenty", () => {
    assert.strictEqual(parseInt("twenty"), 20);
  });
});

describe("test 3", () => {
  it("two hundred forty-six", () => {
    assert.strictEqual(parseInt("two hundred forty-six"), 246);
  });
});
