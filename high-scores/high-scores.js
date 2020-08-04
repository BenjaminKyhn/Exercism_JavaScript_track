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
    this.highscores.sort((a,b) => b-a);
    return this.highscores[0];
  }

  get personalTopThree() {
    this.highscores.sort((a,b) => b-a);
    let personal = [];

    for (let i = 0; i < this.highscores.length; i++) {
      if (i < 3)
        personal.push(this.highscores[i])
    }

    return personal;
  }
}
