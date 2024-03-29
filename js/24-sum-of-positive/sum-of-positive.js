// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let yes = arr.filter((e) => e > 0);
    return yes.reduce((a, b) => {
      return a + b;
    }, 0);
  }
}

// positiveSum([1,-2,3,4,5])
// positiveSum([1,2,3,4,5])
// positiveSum([]);
positiveSum([
  -81, 73, -81, -88, -95, 19, 17, 76, 19, 25, 86, -74, -15, 51, -76, -77, 68,
  -7, -63, -20, 77, -91, -39, 27, -94, 61, 38, 72, 40, -92, 57, 19, -58, -61,
  -83, 5, -24, 30, 19, 14, -11, 65, -21, -53, -37, 87, 94, 7, -80, -66, -30, 43,
  -16, 44, -75, 41, -40, 40, -39, -31, 19, -19, -23, 38, 88, -7, 43, -98, 28,
  -96, 87, -83, -66, 15, -92, 78, 53, 38, 57, -78, 90, 47, 86, -92, 85, -92, 17,
  54, -82, 59, 26, -50, 63, 51, 67, 21, -16, 56, -12, -38, -84, 10, -49, -51,
  86, 20, 81, -16, 77,
]);
