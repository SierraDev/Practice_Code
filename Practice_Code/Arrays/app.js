
// Different Arrays
let shoppingList = [`pizza`, `soda`, `fruit`]
let songList = [`Coast Off`, `Dreams`, `Obeisant Vine`]
let stackOfBooks = [`Lord of the Rings`, `Neuromancer`, `Mona Lisa Overdrive`, `Count Zero`, `The Witcher`]
let fruitsArray = [`strawberry`, `blueberry`, `blackberry`, `watermelon`]
let meatsArray = [`beef`, `chicken`, `fish`]
let vegetablesArray = [`cucumber`, `broccoli`, `spinach`, `artichoke`]
let mixedArray = [`This is a string`, 13, true, null]
let numberArray = [1, 2, 3, 4, 5, 10, 15, 20]
let boolArray = [true, false]

// Array Indices
shoppingList[1]; // soda
shoppingList[shoppingList.length-1]; // fruit (array.length-1 --> gets last item in array)

//Modifying Arrays
songList[2] = `Mountain of Ice` // changes 'Obeisant Vine' to 'Mountain of Ice'
songList[3] = `Obeisant Vine` // adds Obeisant Vine to index 3

// dynamically adds more items to songList array regardless of length
songList[songList.length] = `Budapest Eskimos`
songList[songList.length] = `Hydroponic Garden`

// Array Methods

// Push and Pop
songList.push(`Velius`) //adds Velius to songList array
songList.push(`Mistake`);
songList.pop() // removes last item on array

//Shift and Unshift
stackOfBooks.unshift(`Snow Crash`) // adds Snow Crash to start of stackOfBooks array
stackOfBooks.unshift(`Gardens of the Moon`)
stackOfBooks.shift() // removes the first item of an array and returns it

//Concat
console.log(fruitsArray.concat(vegetablesArray)) // joins fruits and veggies together, and outputs the result as a new array
console.log(vegetablesArray.concat(fruitsArray))

let veggiesAndFruitsArray = fruitsArray.concat(vegetablesArray); // concats both arrays and saves the result to variable
let allFood = fruitsArray.concat(vegetablesArray, meatsArray) // concats fruit array with vegetables and meat array, and saves the resulting new array to allFood

// Includes

songList.includes('Mountain of Ice') // true, because the list includes Mountain of Ice
songList.includes(`Coast Off`, 3) // does the array contain Coast Off after index 3? it doesn't, so it's false

// conditional example for us of includes
 if(songList.includes(`Budapest Eskimos`)){
    console.log(`Not a Helios song.`);
} else {
    console.log(`This is a Helios song.`)
}

// indexOf
console.log(songList.indexOf(`Budapest Eskimos`))
console.log(songList.indexOf(`Obeisant Vine`, 6)) // returns a -1, which means it doesn't exist on the array after index 6

// Join and Reverse
console.log(numberArray.reverse()) // 5, 4, 3, 2, 1 instead of 1, 2, 3, 4, 5
let joinedArray = shoppingList.join(`...`) // inserts ellipsis between elements in the array and saves it to joinedArray variable

// Slice
let sciFiBooks = stackOfBooks.slice(2,5)
let backwardsBooks = stackOfBooks.slice(-2) // starts from other end of array
console.log(sciFiBooks)
console.log(backwardsBooks)

// Splice
let addShoppingItems = shoppingList.splice(1,0, `milk`, `eggs`) // adds milk and eggs after pizza and before soda in shoppingList array
console.log(addShoppingItems)

