// For Loops

// Prints out 'Hello' ten times
for (let i = 1; i <= 10; i++) {
    console.log(`Hello!`, i)
}

// Adds by threes
for (let index = 1; index <= 10; index += 3) {
   console.log(`This is by threes!`, index)

}

// Adds by fives
for (let index = 0; index <= 20; index += 5) {
    console.log(`This is by fives!`, index)

}

// Subtracts by fives
for (let index = 20; index >= 0; index -= 5) {
    console.log(`This subtracts by threes!`, index)

}

// For Loops to iterate through an array
let inventory = [`pen`, `notebook`, `smartphone`, `pocket knife`]

for (let index = 0; index < inventory.length; index++) {
    console.log(inventory[index]);
}

// Nested Loops
for (let index = 1; index <=10; index++) {
    console.log(`Outer loop:`, index)
    for (let j = 10; j >= 1; j--) {
        console.log(`Inner loop: `, j);
    }
}

// Loop through several arrays
let inventoryItems = [
    [`pen`, `notepad`, `smartphone`],
    [`key`, `bedroom key`, `parlor key`],
    [`flashlight`, `matches`, `strange emblem`]
]

for (let index = 0; index < inventoryItems.length; index++) {
    let row = inventoryItems[index]
    console.log(row)
    // loops through individual items of an array
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
        // items of first array are grouped together in case-switch statement and looped through
        switch (row) {
            case row:
                if (row[j] === `pen`){console.log(`this is a pen.`)}
            case row:
                if (row[j]=== `notepad`){console.log(`this is a notepad.`)}
            case row:
                if (row[j]===`smartphone`){ console.log(`this is a smartphone.`)}
                break;
        }
    }
}

// While Loops - best use for uncertain data (i.e unsure how long something is supposed to run, or something that has to run indefinitely)
let i = 0
while (i <= 10) {
    console.log(i)
    i++;
}

// Determines whether or not door is lockpicked
const doorIsOpen = Math.floor(Math.random() * 10);
let attemptLockpick = Math.floor(Math.random() * 10);


// Breaks in While Loops
while(true){
    if(doorIsOpen === attemptLockpick) break;
    console.log(`Success: ${doorIsOpen} Attempt: ${attemptLockpick}`);
    attemptLockpick = Math.floor(Math.random() * 10);
}

console.log(`Success: ${doorIsOpen} Attempt: ${attemptLockpick}`);
console.log(`You've successfully opened the door.`);

// For Of Loops
let boxContents = [`An old trophy`, `books`, `hat`, `pocketwatch`]
for (let element of boxContents) {
    console.log(element)
}
let mapOfHouse = [`bedroom`, `parlor`, `bathroom`, `guest room`, `kitchen`, `foyer`, `attic`]
for(let element of mapOfHouse) {
    console.log(element)
}

// For Of with Objects
let houseObject = {
    rooms: 5,
    kitchens: 2,
    attic: 1,
    basement: 1,
    bathrooms: 3
}

// for(let room of Object.keys(houseObject)){
//     console.log(room, houseObject[room]);
// }

// For In Loops
for (let prop in houseObject) {
    console.log(prop);
    console.log(houseObject[prop]);
}

let totalRooms = 0
for (let prop in houseObject) {
    totalRooms += houseObject[prop];
}

console.log(`Total Rooms: ${totalRooms}`)