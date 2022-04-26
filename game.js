class Game {
    constructor() {
        this.player1 = new Player('Sleuth');
        this.player2 = new Player( 'Hooligan');
        this.currentPlayer;
        this.playerMove;
        this.gameBoard = ["", "", "", "", "", "", "", "", ""];
        this.winningNumbers = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
    }

    whosTurn() {
        this.currentPlayer = !this.currentPlayer;
    }

    updatePlayerWins() {
        if (this.currentPlayer) {
            this.player1.increaseWins()
        } else {
            this.player2.increaseWins()
        }
    }

    playerChangeAfterWin() {
        if (!this.currentPlayer) {
          this.currentPlayer = true;
        } else if (this.currentPlayer) {
            this.currentPlayer = false;
        }
    }

    whoWins() {
        return this.winningNumbers.some(combination => {
            return combination.every(square => {
                return this.gameBoard[square] === this.playerMove;
            })
        }) 
    }

    itsADraw() {
        return this.gameBoard.every(square => {
            return square === this.player1.name.toLowerCase() || square === this.player2.name.toLowerCase();
        })
    }

    resetGameBoard() {
        this.gameBoard = ["", "", "", "", "", "", "", "", ""]
    }

    timeOut() {
        window.setTimeout(gameStart, 2000);
    }
}
