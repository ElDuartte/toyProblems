const { assert } = require("chai");
const summation = require("../09-summation.js")

describe('summation', function () {
  it('should return the correct total', function () {
    assert.equal(summation(1), 1)
    assert.equal(summation(8), 36)
  })
})
