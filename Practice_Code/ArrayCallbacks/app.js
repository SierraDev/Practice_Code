//Array Callbacks

// ForEach
const words = [`asap`, `byob`, `rsvp`, `diy`];
const nums = [1, 2, 3, 4, 5];
const inventory = [`smartphone`, `pen`, `pack of gum`, `notepad`];
const roomsInHouse = [{
        foyer: `A spacious foyer with a staircase. You can go up or through the door on your right.`,
    },
    {
        closet: `A closet with cleaning supplies and an old vaccuum. Otherwise, a dead-end.`,
    },
    {
        upstairs:`A balustrade that wraps around the foyer. You see two doors: one on the left, another on the right.`,
    },
    {
        bedroom:`A bedroom that looks as if it hasn't been slept in since the last century.`,
    },
    {
        bathroom:`An antique bathroom with a clawed foot tub, toilet, a pedestal sink, and a beveled mirror.`,
    }
];
    // outputs all items in inventory array
    inventory.forEach(function(item){
        console.log(item);
    });

    // outputs all room objects in array
    roomsInHouse.forEach(function(room){
        console.log(room);
    });

    // outputs all room objects with index in array
    roomsInHouse.forEach(function(room, i){
        console.log(i, room);
    });

    // Map
    // maps over array and returns a new array of doubled numbers
    let doubled = nums.map(function(num){
        return num * 2;
    });

    // returns objects of elements in nums array and checks if they're even or odd via boolean
    const isEven = nums.map(function(n){
        return {
            value: n,
            isEven: n % 2 === 0
        }
    });

    // a new array to display rooms that were already visited
    const visitedRooms = roomsInHouse.map(function(room){
        return room;
    });

    // maps over array and creates a new array that's uppercased, split at empty strings, then rejoined by periods in those empty strings
    const insertedPeriods = words.map(function(word){
        return word.toUpperCase().split('').join('.')
    });

    // Arrow Functions
    // very crude movement arrow function
    const moveRoom = (room) => {
        switch (room) {
            case `foyer`:
                return roomsInHouse[0];
            case `closet`:
                return roomsInHouse[1];
            case `upstairs`:
                return roomsInHouse[2];
            case `bedroom`:
                return roomsInHouse[3];
            case `bathroom`:
                return roomsInHouse[4];
        }
    }
    // implicit returns with arrow functions
    const multiplyNumbers = x => x * x

    // maps over array and creates a new array of doubled numbers using implicit return
    const doubledNums = nums.map( num => num * 2);

    // maps over array and checks for odd and even numbers using a ternary operator and implicit return
    const isOddOrEven = nums.map((n) => n % 2 === 0 ? `even` : `odd`);

    // Array Find
    const books = [
        `Neuromancer`,
        `American Gods`,
        `Lord of the Rings`,
        `Snow Crash`,
        `Mona Lisa Overdrive`
    ]

    // finds first book in the books array containing 'Neuro' in its title
    const book = books.find(book => book.includes(`Neuro`));

    // finds book in the books array that begins with Lord
    const book2 = books.find(book => book.indexOf("Lord") === 0);

    // Filter
     //filters out odd numbers in nums array and passes it into another array of only odd numbers
    const filteredOdds = nums.filter(num => num % 2 === 1);

    //filters out even numbers in nums array and passes it into another array of only even numbers
    const filteredEvens = nums.filter(num => num % 2 === 0);

    const videoGames = [
        {
            title:  `Resident Evil: Code Veronica`,
            developer: [`Capcom`],
            rating: 4.8,
            genre: [`sci fi`, `survival horror`]
        },
        {
            title: `The Legend of Zelda: Ocarina of Time`,
            developer: [`Nintendo`],
            rating: 4.6,
            genre: [`action adventure`, `fantasy`]
        },
        {
            title: `The Legend of Zelda: Twilight Princess`,
            developer: [`Nintendo`],
            rating: 4.6,
            genre: [`action adventure`, `fantasy`]
        },
        {
            title: `Megaman X`,
            developer: [`Capcom`],
            rating: 4.7,
            genre: [`platforming`, `action adventure`, `side-scroller`]
        },
        {
            title: `Resident Evil 2: Remake`,
            developer: [`Capcom`],
            rating: 4.9,
            genre: [`sci fi`, `survival horror`]
        },
        {
            title: `Dr. Jekyll and Mr. Hyde`,
            developer: [`Advance Communication Co.`],
            rating: 1,
            genre: [`side-scroller`, `action adventure`]
        }
    ];

    // filters games with a rating higher than 4.6 into a new array
    const bestRated = videoGames.filter(game => game.rating > 4.6);

    // filters games that includes the terms 'side-scroller' into a new array
    const sideScrollers = videoGames.filter(game => game.genre.includes(`side-scroller`));

    // filters games developed by Capcom from the array into a new array
    const capcomGames = videoGames.filter(game => game.developer.includes(`Capcom`));

    // mimics query of a user. user looks for titles containing 'Resident', and the results (games with Resident in the title) are filtered into a new array.
    const query = `Resident`;
    const resultsOfQuery = videoGames.filter(game => {
        const title = game.title.toLowerCase();
        return title.includes(query.toLowerCase())
    });

    // Every
    const wordsFi = [`sci-fi`, `low-fi`, `hi-fi`]

    // checks to see if every word in wordsFi array ends in fi // returns true, because they do
    const endsInFi = wordsFi.every(word => word.includes(`fi`));

    // checks to see if every word in wordsFi array is the length of five letters // returns false, because not all match
    const lengthTheSame = wordsFi.every(word => word.length === 5);

    // checks to see if the last index of every word is  // returns true, because they do
    const allEndsInI = wordsFi.every(word => {
        const last = word.length - 1;
        return word[last] === 'i';
    });
    // checks if every game rating is greater than 4.5 // returns false, because not every game is higher than 4.5
    const allGamesGood = videoGames.every(game => game.rating > 4.5)

    // Some
    // checks to see if there are words that begin with s
    const startsWithS = wordsFi.some(word => word[0] === `s`)

    // checks to see if some of the video games in the array are good // returns true, because there are
    const someGamesGood = videoGames.some(game => game.rating > 4.5)

    // Sort
    // sorts games in video games array into a new array, from highest to lowest rating
    const sortedArray = videoGames.slice().sort((a,b) => b.rating - a.rating);
    // sorts games in video games array into a new array, in alphabetical order
    const alphabetized = videoGames.slice().sort((a, b) => a.title > b.title ? 1 : -1);

    // Reduce
    const numsArray = [1, 3, 6, 9, 12, 15];
    const anotherNumsArray = [20, 13, 53, 86, 98, 67];

    // takes nums in the array and sums them
    const product = numsArray.reduce((total, currentVal) => {
        return total * currentVal;
    });

    // finds the larger number in the array
    const maxNumber = anotherNumsArray.reduce((max, currentVal) => {
        if(currentVal > max) return currentVal;
        return max;
    });
    const anotherWayToMax = anotherNumsArray.reduce((max, currentVal) => Math.max(max, currentVal));

    // finds the smallest number in the array
    const minNum = anotherNumsArray.reduce((min, currentVal) => {
        if(currentVal < min) return currentVal;
        return min;
    });
    const anotherWayToMin = anotherNumsArray.reduce((min, currentVal) => Math.min(min, currentVal));

    // specifying a start-point for reduce (100 in this case)
    const specifiedStart = anotherNumsArray.reduce((sum, currentVal)=>{
        return sum + currentVal;
    }, 100);

    // Tallying with Reduce
    // reduces array sum of yes and no to key-value pairs on an empty object
    const votes = [`yes`, `no`, `no`, `yes`, `yes`, `no`, `yes`, `yes`, `no`];

    const talliedVotes = votes.reduce((tally, val) => {
        tally[val] = (tally[val] || 0) + 1
        return tally;
    }, {})

    // const talliedVotes = votes.reduce((tally, val) => {
    //     if(tally[val]) {
    //         tally[val]++
    //     } else {
    //         tally[val] = 1
    //     }
    //     return tally;
    // }, {})

    // grouping video games from video games array into objects by rating
    const groupedByRatings = videoGames.reduce((groupedGames, game) => {
        const key = Math.floor(game.rating);
        //if groupedGames[key] isn't the value of the floored game rating (in this case 4), initialize value as empty array
        if(!groupedGames[key]) groupedGames[key] = [];
        // key is now four, and new game with four rating is pushed to that array
        groupedGames[key].push(game);
        //return arrays with grouped games
        return groupedGames;
    }, {});