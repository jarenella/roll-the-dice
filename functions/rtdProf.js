import { numberError, decimalError, notNumErr, stringErr } from "../errorMessages.js";

//roll with profieciency
function rtdProf(num, profLevel, abilityScore, type) {
    let typeIsUndefined = false;
    let proficiency = 0;
    if(profLevel > 0) {
        proficiency = profLevel;
    }
    if (type == "undefined") {
        typeIsUndefined = true;
    }
    if (typeof num != "number") {
        throw notNumErr
    }
    if ((num - Math.floor(num)) !== 0) { //if num has a decimal
        throw decimalError
    }
    if (num > 200 || num < 1) {
        throw numberError
    }
    if (typeIsUndefined == false) {
        if (typeof type != "string") {
            throw stringErr
        }
    }

    const firstRoll = Math.floor(Math.random() * num);

    if (type == "advantage") {
        const secondRoll = Math.floor(Math.random() * num);
        if (firstRoll > secondRoll) {return firstRoll}
        else {return secondRoll + proficiency + abilityScore};
    }
    else if (type == "disadvantage") {
        const secondRoll = Math.floor(Math.random() * num);
        if (firstRoll > secondRoll) {return secondRoll}
        else {return firstRoll + proficiency + abilityScore};
    }
    else if (typeIsUndefined == true) {
        return firstRoll + proficiency + abilityScore;
    }
    else {
        throw "Error";
    }
}

export { rtdProf };