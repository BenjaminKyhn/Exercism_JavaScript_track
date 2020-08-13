// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

let usedNames = [];

export class Robot {
    _name;

    constructor() {
        this._name = this.generateName();
    }

    get name() {
        return this._name;
    }

    generateName(){
        let firstLetter = String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
        let secondLetter = String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
        let number = Math.floor(Math.random() * 900) + 100;

        let robotName = firstLetter + secondLetter + number;

        if (usedNames.includes(robotName))
            robotName = this.generateName();
        else
            usedNames.push(robotName);

        return robotName;
    }

    reset(){
        this._name = this.generateName();
    }
}

Robot.releaseNames = () => { };
