const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const solution = require("../13-multiples.js");

describe("Basic", () => {
  it("Basic", () => {
    assert.strictEqual(solution(10), 23)
  });
  it("Negative", ()=>{
    assert.strictEqual(solution(0), 0)
  });
});
