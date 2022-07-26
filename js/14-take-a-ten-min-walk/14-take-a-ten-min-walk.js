// NOTES in the instructions
function isValidWalk(walk) {
  let firstHalf = [];
  let secondHalf = [];
  // check if the length of the walk is correct
  if (walk.length != 10) {
    return false;
  } else {
    const half = Math.ceil(walk.length / 2);
    firstHalf = walk.slice(0, 5);
    secondHalf = walk.slice(5, 10);
    console.log(firstHalf + " test line 12");
    console.log(secondHalf + " test line 13");
    // processedSecondHalf(secondHalf, firstHalf);
    //--------------------------------------
    let procesSecondHalf = [];
    for (let index = 0; index < secondHalf.length; index++) {
      switch (secondHalf[index]) {
        case "n":
          procesSecondHalf.push(secondHalf[index].replace("n", "s"));
          break;
        case "s":
          procesSecondHalf.push(secondHalf[index].replace("s", "n"));
          break;
        case "w":
          procesSecondHalf.push(secondHalf[index].replace("w", "e"));
          break;
        case "e":
          procesSecondHalf.push(secondHalf[index].replace("e", "w"));
          break;
      }
    }
    // console.log(secondHalf);
    console.log(firstHalf + " test line 35");
    console.log(procesSecondHalf + " test line 36");
    if (procesSecondHalf === firstHalf) {
      return true;
    } else {
      return false;
    }
  }
  //--------------------------------------

  // // direction counters
  // let n = 0;
  // let s = 0;
  // let w = 0;
  // let e = 0;
  // // to add to the counters
  // for (let index = 0; index < walk.length; index++) {
  //   switch (walk[index]) {
  //     case "n":
  //       n++;
  //       break;
  //     case "s":
  //       s++;
  //       break;
  //     case "w":
  //       w++;
  //       break;
  //     case "e":
  //       e++;
  //       break;
  // }
  // }
  // check if the counters are bigger than 5 return false
  // else return true
  // if (n > 5 || s > 5 || w > 5 || e > 5) {
  //   return false;
  // } else {
  //   return true;
  // }
}


// ----------------------------------------------------
// procesando la segunda mitad para que sea el reves del array
//[n, s, e, w] == [s, n, w, e] true
//function processedSecondHalf(secondHalf, firstHalf) {
//   let procesSecondHalf = [];
//   for (let index = 0; index < secondHalf.length; index++) {
//     switch (secondHalf[index]) {
//       case "n":
//         procesSecondHalf = secondHalf[index].replace("n", "s");
//         break;
//       case "s":
//         procesSecondHalf = secondHalf[index].replace("s", "n");
//         break;
//       case "w":
//         procesSecondHalf = secondHalf[index].replace("w", "e");
//         break;
//       case "e":
//         procesSecondHalf = secondHalf[index].replace("e", "w");
//         break;
//     }
//     // console.log(secondHalf);
//     if (procesSecondHalf == firstHalf) {
//       console.log(procesSecondHalf);
//       return true;
//     } else {
//       return false;
//     }
//   }
//  }
// ----------------------------------------------------

module.exports = isValidWalk;
