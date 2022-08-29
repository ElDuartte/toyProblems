const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const permutations = require("../18-permutations.js");

describe("test", () => {
  it("test 1 char", () => {
    assert.strictEqual(permutations("a"), ["a"]);
  });
  it("test 2 char", () => {
    assert.strictEqual(permutations("ab"), ["ab", "ba"]);
  });

  it("test 4 char", () => {
    assert.strictEqual(permutations("aabb"), [
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });
});
