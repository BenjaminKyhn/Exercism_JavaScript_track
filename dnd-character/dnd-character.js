//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (ability) => {
    if (ability < 3)
        throw new Error("Ability scores must be at least 3");
    if (ability > 18)
        throw new Error("Ability scores can be at most 18");
    return Math.floor((ability - 10) / 2);
};

export class Character {
    constructor() {
        this._strength = Character.rollAbility();
        this._dexterity = Character.rollAbility();
        this._constitution = Character.rollAbility();
        this._intelligence = Character.rollAbility();
        this._wisdom = Character.rollAbility();
        this._charisma = Character.rollAbility();
    }

    static rollAbility() {
        let rolls = [];

        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }

        return rolls.sort().slice(1).reduce((acc, val) => acc + val);
    }

    get strength() {
        return this._strength;
    }

    get dexterity() {
        return this._dexterity;
    }

    get constitution() {
        return this._constitution;
    }

    get intelligence() {
        return this._intelligence;
    }

    get wisdom() {
        return this._wisdom;
    }

    get charisma() {
        return this._charisma;
    }

    get hitpoints() {
        return 10 + abilityModifier(this._constitution);
    }
}
