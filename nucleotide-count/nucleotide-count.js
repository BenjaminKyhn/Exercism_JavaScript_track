//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(dnaString) {
    let nucleotides = "ACGT";
    let counts = [0, 0, 0, 0];

    for (let letter of dnaString) {
      let index = nucleotides.indexOf(letter);
      if (index < 0)
        throw new Error('Invalid nucleotide in strand');
      counts[index]++;
    }

    return counts.join(" ");
  }
}