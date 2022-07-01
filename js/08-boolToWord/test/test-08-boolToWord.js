const { assert } = require("chai")
const boolToWord = require("../08-boolToWord.js")

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.equal(boolToWord(true), 'Yes')
    assert.equal(boolToWord(false), 'No')
    });
  });
