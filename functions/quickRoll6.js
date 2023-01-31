import { numberError, decimalError, notNumErr, stringErr } from "../errorMessages.js";

//rolls a normal 6 sided die (more convenient than entering 2 in RTD and putting in all the other params)
function quickRoll6() {
    return Math.floor(Math.random() * 6) + 1;
}

export { quickRoll6 };