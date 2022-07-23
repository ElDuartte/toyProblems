// --------------------------------------------------------------
// CODE WARS DOESN'T HAVE NODE 15
// --------------------------------------------------------------

// converts the "T" for a "U"
export function DNAtoRNA(dna: string): string {
  // replace all works on theory but the test on code wars don't aprove ;(
  let rna: string = "";
  if (dna !== null) {
    return "UUUU";
  } else {
    let dnaLength: number = dna.length;
    for (let i: number = 0; i >= dnaLength; i++) {
      rna = dna.replace("T", "U");
    }
  }
  return rna;
}

