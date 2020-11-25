// Misc JS Features

// Default Parameters
const multiply = (num1, num2 = 5) => {
    return num1 * num2
}

// Spread Operator for Function Calls
const nums = [22, 33, 65, 90, 21, 35];
const str = `Evil`;

const giveMeFour = (a, b, c, d) => {
    console.log(`a`, a);
    console.log(`b`, b);
    console.log(`c`, c);
    console.log(`d`, d);
}

// breaks the array down into separate arguments
console.log(Math.max(...nums));
console.log(giveMeFour(...str));

// Spread in Array Literals
const inventory = [`pen`, `smartphone`, `gum`, `notepad`];
const itemsPickedUp = [`key`, `small emblem`, `strange figurine`];

// joins arrays together
const newInventory = [...inventory, ...itemsPickedUp];
// makes a copy of the array
const copiedArray = [...inventory];
// converts string into array
const convertToArray = [...`Resident Evil`];

// Spread in Object Literals
const protagonist = {
    inventory: inventory,
    isAlive: true,
    isInjured: false
};

// adding properties to object using spread
const protagonistMod = {
    ...protagonist,
    name: `James`
};
// copying object with spread
const protagonist2 = {
    ...protagonist
};
// changing character condition with spread
const protagInjured = {
    ... protagonist,
    isInjured: true
};

// Rest Parameter
// function that accepts any number of parameters and sums them, using rest parameter
const sum = (...nums) => {
    return nums.reduce((accum, currentVal) => {
        return accum + currentVal;
    });
};
// function that collects remaining parameters that haven't been named already
const characters = (character, ... dialog) => {
    console.log(`character`, character);
    console.log(`dialog`, dialog)
};

// Destructuring Arrays
const characterRoster = [
    `Eadwine`,
    `Alfred`,
    `Hild`,
    `Caoimhe`,
    `Cledwyn ap Daffyd`
];

const [warrior, ...others] = characterRoster;

// Destructuring Objects
const enemyNPC = {
    name: `kobold`,
    HP: 12,
    isAlive: true,
};

const {HP, ...othersProps} = enemyNPC;

// Nested Destructuring
const moreCharacters = [
    {
        name: `Alwyn ap Cynddelw`,
        age: 19,
        race: `Human`,
        country: `The Pagan Marches`
    },
    {
        name: `Leofric the Radiant`,
        age: 31,
        race: `Human`,
        country: `Saxland`
    },
    {
        name: `Fiadh Red-Hair`,
        age: 25,
        race: `Centaur`,
        country: `Gray Steppes`
    }
];

const [firstCharacter, ...otherCharacters] = moreCharacters; // Alwyn, ... the rest of them
const [,{country}] = moreCharacters; // Saxland

// Destructuring Parameters
const print = (person) => {
    const {name, HP, isAlive} = person;
    console.log(`${name} ${HP} ${isAlive}`)
};
