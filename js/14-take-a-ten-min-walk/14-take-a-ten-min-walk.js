// NOTES in the instructions
// function isValidWalk(walk) {
//   let firstHalf = [];
//   let secondHalf = [];
//   let processSecondHalf = [];
//   // check if the length of the walk is correct
//   if (walk.length !== 10) {
//     return false;
//   } else {
//     firstHalf = walk.slice(0, 5);
//     secondHalf = walk.slice(5, 10);
//     for (let index = 0; index < secondHalf.length; index++) {
//       switch (secondHalf[index]) {
//         case "n":
//           processSecondHalf.push(secondHalf[index].replace("n", "s"));
//           break;
//         case "s":
//           processSecondHalf.push(secondHalf[index].replace("s", "n"));
//           break;
//         case "w":
//           processSecondHalf.push(secondHalf[index].replace("w", "e"));
//           break;
//         case "e":
//           processSecondHalf.push(secondHalf[index].replace("e", "w"));
//           break;
//       }
//     }
//     // console.log(secondHalf);
//     console.log(firstHalf + " test line 35");
//     console.log(processSecondHalf + " test line 36");
//     if (JSON.stringify(firstHalf) === JSON.stringify(processSecondHalf)) {
//       return true;
//     } else {
//       console.log(typeof firstHalf + " else false");
//       return false;
//     }
//   }
// }

// the code above works it was one test that dint pass
function isValidWalk(walk) {
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;

  if (walk.length !== 10) return false;

  for (i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        n++;
        break;
      case "s":
        s++;
        break;
      case "e":
        e++;
        break;
      case "w":
        w++;
        break;
    }
  }

  if (n == s && w == e) return true;
  return false;
}

module.exports = isValidWalk;
