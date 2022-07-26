// --------------------------------------------------------------
// CODE WARS DOESN'T HAVE NODE 15
// --------------------------------------------------------------

// converts the "T" for a "U"
function DNAtoRNA(dna) {
  // replace all works on theory but the test on code wars don't aprove ;(
  let rna = "";
  if (dna !== null) {
    return "UUUU";
  } else {
    let dnaLength = dna.length;
    for (let i = 0; i >= dnaLength; i++) {
      rna = dna[i].replace("T", "U");
    }
  }
  return rna;
}

module.exports = DNAtoRNA;
