import { numberError, decimalError, notNumErr, stringErr } from "../errorMessages.js";

//average rtd (advantage or disadvantage can be added in the "type" parameter)
function rtd(num, abilityScore, type) {
    let typeIsUndefined = false;
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
        else {return secondRoll + abilityScore};
    }
    else if (type == "disadvantage") {
        const secondRoll = Math.floor(Math.random() * num);
        if (firstRoll > secondRoll) {return secondRoll}
        else {return firstRoll + abilityScore};
    }
    else if (typeIsUndefined == true) {
        return firstRoll + abilityScore;
    }
    else {
        throw "Error";
    }
}

export { rtd };