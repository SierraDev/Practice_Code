const myDeck = {
    deck: [],
    drawnCards: [],
    suits: [`hearts`, `diamonds`, `spades`, `clubs`],
    values: `2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A`,
    startDeck(){
        const {
            suits,
            values,
            deck
        } = this;
        for (const value of values.split(`,`)) {
            for (const suit of suits) {
                deck.push({
                value,
                suit
                });
            }
        }
        return deck;
    },
        drawCard(){
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
    },
        drawMultipleCards(numCards){
            const cards = [];
            for (let index = 0; index < numCards; index++) {
                cards.push(this.drawCard());
        }
            return cards;
    },
        shuffleDeck(){
            const {
                deck
            } = this;
        // loops over an array backwards
            for (let i = deck.length - 1; i > 0; i--) {
        // pick random index before current element
            let j = Math.floor(Math.random() * (i+ 1));
        // swap the indexes
            [deck[i], deck[j]] = [deck[j], deck[i]];

        }
    }
};
