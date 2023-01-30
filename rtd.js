import { rtd } from "./functions/rtd.js";
import { rtdProf } from "./functions/rtdProf.js";

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
// console.log("Normal roll 100 is " + rtd(100, 7)); //error
console.log("advantage roll 100 is " + rtd(100, 7, "advantage"));
console.log("disadvantage roll 100 is " + rtd(100, 7, "disadvantage"));

console.log("----------------------------------------------------------------------");

//ability score is 10 and you're rolling a 100 sided die
// console.log("Normal roll 100 with 5 prof is " + rtdProf(100, 5, 10)); //error
console.log("advantage roll 100 with 10 prof is " + rtdProf(100, 10, 10, "advantage"));
console.log("disadvantage roll 100 with 2 prof is " + rtdProf(100, 2, 10, "disadvantage"));

console.log("----------------------------------------------------------------------");

console.log("coin flip is " + coinFlip());

console.log("----------------------------------------------------------------------");

console.log("six sided die is " + quickRoll6());