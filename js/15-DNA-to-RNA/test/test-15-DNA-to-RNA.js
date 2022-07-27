const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const DNAtoRNA = require("../15-DNA-to-RNA.js");

describe("Basic tests", () => {
  it("Empty value", () => {
    assert.strictEqual(DNAtoRNA(""), "");
  });
  it("TTTT == UUUU", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU");
  });
  it("GCAT == GCAU", () => {
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU");
  });
  it("GACCGCCGCC == GACCGCCGCC", () => {
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
  });
});
