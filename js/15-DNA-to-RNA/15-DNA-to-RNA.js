// --------------------------------------------------------------
// CODE WARS DOESN'T HAVE NODE 15
// --------------------------------------------------------------

// converts the "T" for a "U"
function DNAtoRNA(dna) {
  // replace all works on theory but the test on code wars don't aprove ;(
  let rna = dna.split("");
  if (dna.length == 0) {
    return "";
  } else {
    for (let i = 0; i <= rna.length; i++) {
      if (rna[i] == "T") {
        rna[i] = "U";
      }
    }
    return rna.join("");
  }
}

module.exports = DNAtoRNA;
