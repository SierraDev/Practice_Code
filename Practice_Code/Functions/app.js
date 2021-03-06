// Dice Roll
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1
    return (`Rolled: ${roll}`)
}

// Roll specific amount of times
function throwDie(rolls){
    for (let index = 0; index < rolls; index++) {
        return rollDie(`Rolled: `, index)
    }
}

throwDie()

function isAlexia(name){
    if(name.toString().toLowerCase() === `alexia`){
        return `You want it? You're not worthy of its power!`
    } else {
        return `You didn't pick Alexia, even thought she's the coolest villain in the series. Shame.`
    }
}

// Password Validator

function isValid(password, username){
    if(
        password.length < 8 ||
        password.indexOf(` `) !== -1 ||
        password.indexOf(username) !== -1
    ) {
        return false;
    }
        return true;
}

function isPasswordValid(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(` `) !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}

// function isValid(password, username){
//    if(password.length < 8){
//        return false;
//    }
//    if(password.indexOf(` `) !== -1) {
//        return false;
//    }
//    if(password.indexOf(username)!== -1) {
//        return false;
//    }
//    return true;
// }

// Finding Average
function findAverage(arr){
    let total = 0;
    //loop over each number
    for (let num of arr) {
        //add them together
        total += num;
    }
    //divide by number of nums
    return total/arr.length;

}

// Pangrams
function isPangram(str){
    let alphabet = `abcdefghijklmnopqrstuvwxyz`;
    let lowerCased = str.toLowerCase();
    for (let letter of alphabet) {
        if(!lowerCased.includes(letter)) {
            return false;
        }
    }
            return true;
}

//Get Playing Card

// Helper function for picking card
function pickCard(arr){
    //return random element from arr
    const index = Math.floor(Math.random() * arr.length)
    return arr[index];
}

function getCard(){
    const values = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
    const suits = [`spades`, `clubs`, `diamonds`, `hearts`];

    return {value:pickCard(values), suit:pickCard(suits)};
}

// function getCard(){
//     const values = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
//     const valIndex = Math.floor(Math.random() * values.length)
//     const value = values[valIndex];

//     const suits = [`spades`, `clubs`, `diamonds`, `hearts`];
//     const suitIndex = Math.floor(Math.random() * suits.length)
//     const suit = suits[suitIndex];
//     return {value:value, suit:suit};
// }

//Function Expressions
const divide = function(x, y){
    return x/y;
}

// Higher Order Functions
function add(x, y){
    return x + y;
}

const subtract = function(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

const divide = function(x, y){
    return x/y;
}

const operations = [add, subtract, multiply, divide];
operations[1](5, 5);

//looping over array of functions
for (let func of operations) {
    let result = func(5, 10);
    console.log(result);
}

//attaching function as a method in an object
const calculator = {
    multiply: multiply,
    divide: divide,
    add: add,
    subtract: subtract
}

console.log(calculator.multiply(5, 5));
console.log(calculator.divide(10, 5));
console.log(calculator.add(5, 5));
console.log(calculator.subtract(15, 5));

//Functions as Arguments
function callThreeTimes(f){
    f();
    f();
    f();
}
// Functions
const Alexia = function(){
    let quote = `You want it? You are not worthy of its power!`;
    console.log(quote);
}

const Albert = function(){
    let quote = `Oh, little fishy, come see my hook.`;
    console.log(quote);
}

const Annette = function(){
    let quote = `Mommy loves you, sweetie. Good-bye.`
    console.log(quote);
}

// Repeats chosen function a specified number of times
function repeatNTimes(action, num){
    for (let index = 0; index < num; index++) {
        action();
    }
}

// Uses Math.random to decide which function is run, like a coin-toss
function pickOne(f1, f2){
    let randNum = Math.floor(Math.random() * 10)
    if(randNum < 5){
        f1();
    }
    else {
        f2();
    }
}
// Returning Functions
function multiplBy(num) {
    return function(x){
        return x * num;
    }
}
const triple = multiplBy(8); // sets num to 8
triple(8); // 8 becomes x and multiplies by num (8), which equals 64

const double = multiplBy(2) // sets num to 2 and doubles by x
double(12); // sets x to 12 and multiplies it by num (2), which equals 24

const half = multiplBy(0.5) // sets 0.5 to num
half(10); // sets x to 10 and halves it by num (0.5), which equals 5

function makeBetweenFunc(x,y) {
    //the return function takes num and compares it against x and y inputs from the user
    return function(num){
       return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(0, 18); //if user inputs isChild(15), it returns true, as that age is less than 18 but greater than 0
const isInEighties = makeBetweenFunc(1980, 1990) //if user inputs 1984, function returns true
const isNiceWeather = makeBetweenFunc(60, 75) // if user inputs a number between 60 and 75, it returns true
