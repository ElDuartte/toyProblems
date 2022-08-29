const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const rot13 = require("../19-rot13.js");

describe("test 1:", () => {
  it("test 1: test", () => {
    assert.strictEqual(rot13("test"), "grfg");
  });
});

describe("test 2:", () => {
  it("test 2: abcd", () => {
    assert.strictEqual(rot13("abcd"), "nopq");
  });
});

describe("test 3 ascii:", () => {
  it("test 2: abcd", () => {
    assert.strictEqual(rot13("abcd"), [97, 98, 99, 100]);
  });
});
