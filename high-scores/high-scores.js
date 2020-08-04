//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(highscores) {
    this.highscores = highscores;
  }

  get scores() {
    return this.highscores;
  }

  get latest() {
    return this.highscores[this.highscores.length - 1];
  }

  get personalBest() {
    return Math.max(...this.highscores);
  }

  get personalTopThree() {
    return this.highscores.sort((a,b) => b-a).slice(0, 3);
  }
}
