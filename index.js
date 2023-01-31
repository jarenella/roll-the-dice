import { rtd, rtdProf, coinFlip, quickRoll6, quickRoll20, divide } from "./functions/index.js";

//----------------------------------------------------------------------------------


//ability score is seven and you're rolling a 100 sided die
// console.log("Normal roll 100 is " + rtd(100, 7)); //error
console.log("advantage roll 100 (7 ability score) is " + rtd(100, 7, "advantage"));
console.log("disadvantage roll 100 (7 ability score) is " + rtd(100, 7, "disadvantage"));

console.log("----------------------------------------------------------------------");

//ability score is 10 and you're rolling a 100 sided die
// console.log("Normal roll 100 with 5 prof is " + rtdProf(100, 5, 10)); //error
console.log("advantage roll 100 with 10 prof is " + rtdProf(100, 10, 10, "advantage"));
console.log("disadvantage roll 100 with 2 prof is " + rtdProf(100, 2, 10, "disadvantage"));

console.log("----------------------------------------------------------------------");

console.log("coin flip is " + coinFlip());

console.log("----------------------------------------------------------------------");

console.log("six sided die is " + quickRoll6());

console.log("----------------------------------------------------------------------");

console.log("twenty sided die is " + quickRoll20());

console.log("----------------------------------------------------------------------");

console.log("12/6 is  " + divide(12, 6));
console.log("9/3 is  " + divide(9, 3));