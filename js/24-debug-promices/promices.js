function fib(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n === 0) {
    return 0n;
  } else if (n === 1) {
    return 1n;
  } else if (n < 0) {
    if (-n % 2 === 0) {
      return -fib(-n);
    } else {
      return fib(-n);
    }
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Test cases
describe("The Millionth Fibonacci", () => {
  describe("example tests", () => {
    it("fib 0", () => assert.strictEqual(fib(0), 0n));
    it("fib 1", () => assert.strictEqual(fib(1), 1n));
    it("fib 2", () => assert.strictEqual(fib(2), 1n));
    it("fib 3", () => assert.strictEqual(fib(3), 2n));
    it("fib 4", () => assert.strictEqual(fib(4), 3n));
    it("fib 5", () => assert.strictEqual(fib(5), 5n));
    it("fib -6", () => assert.strictEqual(fib(-6), -8n));
    it("fib -6", () => assert.strictEqual(fib(-6), -8n));
    it("fib -6", () => assert.strictEqual(fib(-6), -8n));
  });
});
