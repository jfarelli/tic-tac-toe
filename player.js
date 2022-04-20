class PlayerOne {
    constructor(icon) {
        this.id = Date.Now();
        this.token = icon.token
        this.winner = false;
        this.wins = 0;
    }

    increaseWins() {
        if (this.winner === true) {
            this.wins++;
        }
    }
}   
