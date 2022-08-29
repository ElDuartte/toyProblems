// Swap elements from the arr
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Swap and generate the new arr
function genPermutations(chars, left, right, set) {
  if (left === right) {
    set.add(chars.join(""));
  } else {
    for (let i = left; i <= right; i++) {
      swap(chars, left, i);
      genPermutations(chars, left + 1, right, set);
      swap(chars, left, i);
    }
  }
}

function permutations(string) {
  const N = string.length;
  let chars = string.split("");
  let set = new Set();
  genPermutations(chars, 0, N - 1, set);
  // making an arr from set witch is an object and returning the arr
  return Array.from(set);
}

module.exports = permutations;
