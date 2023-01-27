import { numberError, decimalError, notNumErr, stringErr } from "./errorMessages";

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

//fips a coin heads or tails (more convenient than entering 2 in RTD and putting in all the other params)
function coinFlip() {
    const side = Math.floor(Math.random() * 2) + 1;
    if (side == 1) {return "Tails"}
    else if (side == 2) {return "Heads"};
}

//rolls a normal 6 sided die (more convenient than entering 2 in RTD and putting in all the other params)
function quickRoll6() {
    return Math.floor(Math.random() * 6) + 1;
}

function quickRoll20() {

}

function divide(num, diviedBy) {
    
}


//ability score is seven and you're rolling a 100 sided die
console.log("Normal roll 100 is " + rtd(100, 7));
console.log("advantage roll 100 is " + rtd(100, 7, "advantage"));
console.log("disadvantage roll 100 is " + rtd(100, 7, "disadvantage"));

console.log("----------------------------------------------------------------------");

//ability score is 10 and you're rolling a 100 sided die
console.log("Normal roll 100 with 5 prof is " + rtdProf(100, 5, 10));
console.log("advantage roll 100 with 10 prof is " + rtdProf(100, 10, 10, "advantage"));
console.log("disadvantage roll 100 with 2 prof is " + rtdProf(100, 2, 10, "disadvantage"));

console.log("----------------------------------------------------------------------");

console.log("coin flip is " + coinFlip());

console.log("----------------------------------------------------------------------");

console.log("six sided die is " + quickRoll6());