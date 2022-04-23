class Player {
    constructor(name, icon) {
        this.name = name;
        this.turn = false;
        this.icon = icon;
        this.wins = 0;
    }

    increaseWins() {
        this.wins++;
    }
} 