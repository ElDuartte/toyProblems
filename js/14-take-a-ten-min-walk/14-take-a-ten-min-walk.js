// NOTES in the instructions
function isValidWalk(walk) {
  let firstHalf = [];
  let secondHalf = [];
  // check if the length of the walk is correct
  if (walk.length != 10) {
    return false;
  } else {
    const half = Math.ceil(walk.length / 2);
    firstHalf = walk.slice(0, half);
    secondHalf = walk.slice(half);
    procesSecondHalf(secondHalf);
  }
  // direction counters
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;
  // to add to the counters
  for (let index = 0; index < walk.length; index++) {
    switch (walk[index]) {
      case "n":
        n++;
        break;
      case "s":
        s++;
        break;
      case "w":
        w++;
        break;
      case "e":
        e++;
        break;
    }
  }
  // check if the counters are bigger than 5 return false
  // else return true
  // if (n > 5 || s > 5 || w > 5 || e > 5) {
  //   return false;
  // } else {
  //   return true;
  // }
}
// procesando la segunda mitad para que sea el reves del array
// [n, s, e, w] == [s, n, w, e] true
function processedSecondHalf(secondHalf) {
  let procesSecondHalf = [];
  for (let index = 0; index < secondHalf.length; index++) {
    switch (secondHalf[index]) {
      case "n":
        procesSecondHalf = secondHalf.replaceAll("n", "s");
        break;
      case "s":
        procesSecondHalf = secondHalf.replaceAll("s", "n");
        break;
      case "w":
        procesSecondHalf = secondHalf.replaceAll("w", "e");
        break;
      case "e":
        procesSecondHalf = secondHalf.replaceAll("e", "w");
        break;
    }
    return procesSecondHalf;
  }
}

module.exports = isValidWalk;
