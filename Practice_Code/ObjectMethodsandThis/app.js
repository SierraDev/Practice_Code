// Shorthand Properties

// returns an object called gameStats with key-value pairs
const getRatings = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, rating) => sum + rating);
    const avg = sum/arr.length;
        return {
            max,
            min,
            sum,
            avg
        };
};

const ratings = [3.5, 4.6, 3.8, 5, 2.5, 4.8, 4.9, 3.2];
const gameStats = getRatings(ratings);


// Computed Properties
const charClass = `mage`;
const character = `Alwyn ap Cynddelw`;
const charClass2 = `knight`;
const character2 = `Leofric of Saxland`;

const characterRoster = {};
characterRoster[charClass] = character;
characterRoster[charClass2] = character2;

// above code with computer properties
const team = {
    [charClass]: character,
    [charClass2]: character2
};
// returns an object with a dynamic key-value pair using computed props
const addProp = (obj, key, value) => { return {...obj, [key]:value}};

    addProp(team, `lancer`, `Niamh White-Spear`);

// Adding Methods to Objects/This Keyword
const protagonist = {
    name: `Alwyn ap Cynndelw`,
    role: `Druid`,
    status: `Alive`,
    dialog(dialog, condition){
        dialog = `Bore da. ${this.name} dw i.`;
        if(condition = `greet`) {
            return dialog;
        };
    },
    dialog2(dialog, condition) {
            dialog = `Hwyl! Wela i chi wedyn.`;
            if(condition = `goodbye`){
                return dialog;
            }
        },
    stats(){
        const {
            name,
            role,
            status
        } = this;
        console.log(`${name}, ${role}, ${status}`);
    }
};

// This Keyword
const companion1 = {
    name: `Niamh White-Spear`,
    class: `Lancer`,
    isAlive: true,
    warCry: `Fio Epobha!`,
    dialog(dialog){
        dialog = this.warCry;
        return dialog;
    }
};