var game = new Game();
var sleuth = game.player1
var hooligan = game.player2
var gameBoardSquares = document.querySelectorAll('.cell');
var playerTurnText = document.querySelector('.player-turn');
var winningText = document.querySelector(".winning-text");
var winningMessage = document.getElementById("winningMessage");
var displaySleuthWins = document.querySelector('.display-sleuth-wins');
var displayHooliganWins = document.querySelector('.display-hooligan-wins');

gameStart();

function gameStart() {
    gameBoardSquares.forEach(square => {
        square.classList.remove('hooligan');
        square.classList.remove('sleuth');
        square.addEventListener('click', squareClicked, {once: true})
        winningMessage.classList.remove('show');
        game.playerChangeAfterWin()
        displayPlayerTurn();
        game.resetGameBoard();
    })   
}

function squareClicked(e) {
    var square = e.target;
    sleuth = 'sleuth';
    hooligan = 'hooligan';
    game.playerMove = game.currentPlayer ? hooligan : sleuth;
    displayPlayerTurn();
    iconPlacement(square);
    if (game.whoWins(game.playerMove)) {
        gameCompleted(false);
    } 
    if (game.itsADraw()) {
        gameCompleted(true);
    } 
}

function iconPlacement(square) {
    var squareIndex = square.classList[1].split("-")[1]
    game.gameBoard[squareIndex] = game.playerMove;
    console.log(game.gameBoard)
    updateSquare(squareIndex);
}

function updateSquare(squareIndex) {
    document.querySelector(`.cell-${squareIndex}`).classList.add(game.gameBoard[squareIndex])
}

function gameCompleted(draw) {
    if (draw) {
        winningText.innerText = `It's a stalemate!`;
        game.timeOut()
    } else {
        winningText.innerText = `The ${game.currentPlayer ? 'Sleuth' : 'Hooligan'} wins!`;
        game.updatePlayerWins()
        game.timeOut()
    }
    winningMessage.classList.add('show');
    displayWinCount();
}

function displayPlayerTurn() {
    game.whosTurn()
    playerTurnText.innerText = `It's the ${game.currentPlayer ? 'Hooligan' : 'Sleuth'}'s turn!`;
}

function displayWinCount() {
    displaySleuthWins.innerText = `${game.player1.wins}`
    displayHooliganWins.innerText = `${game.player2.wins}`
}
