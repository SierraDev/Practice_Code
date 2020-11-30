const creepyPhrases = {
    // array of creepy phrases
    phrases: [
        `Behind you.`,
        `You're never actually alone.`,
        `I can see you at your computer.`,
        `Are you working on some code?`,
        `I haven't forgotten.`],
        // method that picks a random phrase from the array and runs it
        pickPhrase(){
            const {
                phrases
            } = this;
            const index = Math.floor(Math.random() * phrases.length);
            return phrases[index];
        },
        // method that calls on a phrase at specified intervals
        start(){
            this.timerID = setInterval(() => {
                console.log(this.pickPhrase());
            }, 3000);
        },
        stop(){
            clearInterval(this.timerID);
        }
};
