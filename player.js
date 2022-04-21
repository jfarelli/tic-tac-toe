class Player {
    constructor(id, name, icon) {
        // this.id = id;
        this.name = name;
        this.turn = false;
        // this.token = icon.token;
        this.winner = false;
        this.wins = 0;
    }

    increaseWins() {
        if (this.winner === true) {
            this.wins++;
        }
    }
}   
