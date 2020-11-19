
//NESTING

let password = 'cat dog';

// if(password.length>=6){
//     //indexOf checks for spaces. Index of -1 ensures the element (the space) isn't present in the string.
//   if(password.indexOf(' ') === -1){
//     console.log(`Valid password!`);
//   }
//   else {
//     console.log(`Password is long enough, but can't contain spaces.`)
//   }
// }

// else {
//   console.log(`Password isn't long enough`);

// }

//REFACTORED NESTED FUNCTIONS

if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log(`Valid password!`)
}

    else {
        console.log(`Invalid password!`)
}

//PICK A NUMBER BETWEEN 1 and 10
let num = 12
if(num >= 1 && num <= 10) {
    console.log(`Number is between 1 and 10`)
}
    else {
        console.log(`Invalid number!`)
}

// AGE CHECK
let age = 18;
if(age < 6 || age >= 65){
    console.log(`You get in for free!`)
}
    else {
        console.log(`Sorry, it's five dollars.`)
}

//COLOR SNIPPET
let color = `red`;
if(color === `red` || color === `blood red` || color === `ruby`){
    console.log(`Excellent choice.`)
}

// LOGGED IN USER SNIPPET
let loggedInUser;

//If there isn't a logged in user
if(!loggedInUser){
    console.log(`Get out of here!`)
}

//FLAVOR SNIPPET
let flavor = `Vanilla`;
    if(flavor !== `Vanilla` && flavor !== `Mint`){
        console.log(`All we have is vanilla and mint.`)
    }

    if(!(flavor === `Vanilla` || flavor === `Mint`)) {
        console.log(`Sorry, we only have vanilla and mint.`)

    }

//NOTES:
// -1 basically means something is searching for a nonexistent element in a string

//TERNARY OPERATOR

let numLucky = 7;

// if(numLucky === 7){
//     console.log(`Lucky!`);
// } else {
//     console.log(`Not lucky!`);
// }

numLucky === 7 ? console.log(`Lucky!`) : console.log(`Not Lucky!`);

// TERNARY ASSIGNMENT OF COLOR TO VARIABLES

let status = `offline`;

// let color;
// if(status === `offline`){
//     color = `red`;
// } else {
//     color = `green`;
// }

let colorStatus = status === `offline` ? console.log(`red`) : console.log(`green`);

