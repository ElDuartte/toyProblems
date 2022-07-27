// --------------------------------------------------------------
// CODE WARS DOESN'T HAVE NODE 15
// --------------------------------------------------------------

// converts the "T" for a "U"
function DNAtoRNA(dna: string): string {
  // replace all works on theory but the test on code wars don't aprove ;(
  let rna: string[] = dna.split("");
  if (dna.length == null) {
    return "";
  } else {
    for (let i: number = 0; i <= dna.length; i++) {
      if (rna[i] == "T") {
        rna[i] = "U";
      }
    }
    return rna.join("");
  }
}
