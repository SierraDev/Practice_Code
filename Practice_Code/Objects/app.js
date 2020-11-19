//Examples of Character Objects
let protagonist = {
    firstName: `Allen`,
    lastName: `Gray`,
    perks: [`perceptive`, `intelligent`],
    inventory: {
        itemOne: `smartphone`,
        itemTwo: `pen`,
        itemThree: `notebook`

    }

}

// Examples of Scene Objects
const bedroom = {
    look: `A bedroom. There's a bed, and it looks like nobody has slept in it for years.`,
    speak: `You talk to yourself.`,
    listen: `You hear a strange scratching noise from the door on your left.`
}

const parlor = {

}

const foyer = {
    look: `You see four doors, and a staircase leading up to a balustrade.`,
    speak: `You call out, but nobody but your echo answers.`,
    listen: `The silence is almost deafening.`,
     actions: {
        walk: `You can either go upstairs, or right to the parlor.`,
        upstairs: bedroom.look,
        parlor: parlor.look
    }
}

// Updating and Adding Properties - all of these properties are added to the parlor object
parlor.look = `Nothing but dusty furniture and antiques, and a dead marble fireplace.`
parlor.speak = `You call out, and swear you hear a woman answer back, though you don't see anyone.`
parlor.listen = `Wind rattles the windows, and rain tinkles against the glass.`

// Appending another string to 'look' property in parlor object
parlor.look += ` Several windows look out toward the woods.`

// Mansion map
const mansion = [
    bedroom,
    parlor,
    foyer
]
