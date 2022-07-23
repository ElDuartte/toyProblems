// NOTES in the instructions
function isValidWalk(walk) {
  // check if the length of the walk is correct
  if (walk.length != 10) {
    return false;
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
  if (n > 5 || s > 5 || w > 5 || e > 5) {
    return false;
  } else {
    return true;
  }
}

module.exports = isValidWalk;
