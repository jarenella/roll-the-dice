import { numberError, decimalError, notNumErr, stringErr } from "../errorMessages.js";

//fips a coin heads or tails (more convenient than entering 2 in RTD and putting in all the other params)
function coinFlip() {
    const side = Math.floor(Math.random() * 2) + 1;
    if (side == 1) {return "Tails"}
    else if (side == 2) {return "Heads"};
}

export { coinFlip };