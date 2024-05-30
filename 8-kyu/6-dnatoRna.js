function DNAtoRNA(dna) {
  //barbar
  let temp = "";
  for (let i = 0; i < dna.length; i++) {
    dna[i] === "T" ? (temp += "U") : (temp += dna[i]);
  }
  return temp;
}
console.log(DNAtoRNA("GCAT"));

function DNAtoRNAMAP(dna) {
  return dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");
}
console.log(DNAtoRNAMAP("GCAT"));

const DNAtoRNA2 = (dna) =>
  dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");
