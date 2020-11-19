// CASE SWITCH
// let scene = 4;

// switch(scene){
//     case 1:
//         console.log(`A foyer with a large staircase.`);
//         break;
//     case 2:
//         console.log(`A balustrade that overlooks the foyer.`)
//         break;
//     case 3:
//         console.log(`A hallway lit by candelabras.`);
//         break;
//     case 4:
//         console.log(`A bedroom that hasn't been used in a long time.`);
//         break;
//     case 5:
//         console.log(`The bathroom. The sink is cracked, and someone shattered the mirror.`);
//         break;
//     case 6:
//         console.log(`A closet full of cleaning chemicals.`);
//         break;
//     case 7:
//         console.log(`A secret door inside the closet leads to an unsettling basement.`);
//         break;
//     default:
//         console.log(`You haven't gone anywhere.`);

// }

let scene = `bedroom`;

switch(scene){
    case `A foyer with a large staircase.`:
        break;
    case `A balustrade that overlooks the foyer.`:
        break;
    case `A hallway lit by candelabras.`:
        break;
        //BELOW LOCATIONS ARE IN THE SAME ROOM
    case `bedroom`:
    case `bathroom`:
        console.log(`A bedroom that hasn't been used in a long time. There's a bathroom in there; the sink is cracked, and someone had shattered the mirror.`)
        break;
    case `A closet full of cleaning chemicals.`:
        break;
    case `A secret door inside the closet leads to an unsettling basement.`:
        break;
    default:
        `You haven't gone anywhere.`

}

