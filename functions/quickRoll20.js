import { numberError, decimalError, notNumErr, stringErr } from "../errorMessages.js";

function quickRoll20() {
    return Math.floor(Math.random() * 20) + 1;
}

export { quickRoll20 };