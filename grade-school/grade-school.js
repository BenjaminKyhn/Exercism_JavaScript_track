//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    constructor() {
        this.db = {};
    }

    roster() {
        // Return an object instead of an array, so the array cannot be modified
        return JSON.parse(JSON.stringify(this.db))
    }

    add(name, grade) {
        if (this.db[grade] === undefined)
            this.db[grade] = [];
        this.db[grade].push(name);
        this.db[grade].sort();
    }

    grade(grade) {
        if (this.db[grade] === undefined)
            return this.db[grade] = [];
        // Return a list of arguments instead of an array, so the array cannot be modified
        return [...this.db[grade]]
    }
}
