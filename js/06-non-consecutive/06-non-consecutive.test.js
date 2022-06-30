const firstNonConsecutive = require("./06-non-consecutive");

test("First non consecutive", () => {
	expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toStrictEqual(
		[1, 2, 3, 4, 6, 7, 8],
		6
	);
});
