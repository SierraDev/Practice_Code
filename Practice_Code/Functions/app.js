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