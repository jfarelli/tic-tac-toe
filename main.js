var game = new Game();
var sleuth = game.player1
var hooligan = game.player2
var restartButton = document.getElementById("restartButton")
var gameBoardSquares = document.querySelectorAll('.cell')
var playerTurnText = document.querySelector('.player-turn');
var winningText = document.querySelector(".winning-text");
var winningMessage = document.getElementById("winningMessage");
var displaySleuthWins = document.querySelector('.display-sleuth-wins');
var displayHooliganWins = document.querySelector('.display-hooligan-wins');

gameStart();

restartButton.addEventListener('click', gameStart);



function gameStart() {
    game.currentPlayer = false;
    gameBoardSquares.forEach(square => {
        square.classList.remove('hooligan');
        square.classList.remove('sleuth');
        square.addEventListener('click', squareClicked, {once: true})
        // game.toggleTurn();
        displayPlayerTurn();
        displayWinCount();
    })   
}

function squareClicked(e) {
    var square = e.target;
    sleuth = 'sleuth';
    hooligan = 'hooligan';
    game.playerMove = game.currentPlayer ? hooligan : sleuth;
    displayPlayerTurn();
    iconPlacement(square, game.playerMove);
    if (whoWins(game.playerMove)) {
        gameCompleted(false);
    } 
    if (itsADraw()) {
        gameCompleted(true);
    } 
}

function gameCompleted(draw) {
    if (draw) {
        playerTurnText.innerText = `It's a stalemate!`
    } else {
        playerTurnText.innerText = `The ${game.currentPlayer ? 'Sleuth' : 'Hooligan'} wins!`
        game.updatePlayerWins()
        timeOut()
    }
    // winningMessage.classList.add('show');
}

function itsADraw() {
    return [...gameBoardSquares].every(square => {
        return square.classList.contains('sleuth') || square.classList.contains('hooligan');
    })
}

function timeOut() {
    window.setTimeout(gameStart, 2000);
  }

function iconPlacement(square) {
    square.classList.add(game.playerMove)
}

function whoWins() {
    return game.winningNumbers.some(combination => {
        return combination.every(square => {
            return gameBoardSquares[square].classList.contains(game.playerMove)
        })
    }) 
}

function displayPlayerTurn() {
    game.whosTurn()
    playerTurnText.innerText = `It's the ${game.currentPlayer ? 'Hooligan' : 'Sleuth'}'s turn!`
}

function displayWinCount() {
    if (whoWins(game.currentPlayer)) {
        displaySleuthWins.innerText = `${game.player1.wins}`
    } else {
        displayHooliganWins.innerText = `${game.player2.wins}`
  }
}




































// function clickedSquareEvent(e) {
//     const squareClicked = e.target;
//     const squareClickedIndex = parseInt(
//         squareClicked.getAttribute('game-square-index')
//       );
//       if (game.gameBoard[squareClickedIndex] !== "" || !game.isGameSet) {
//         return;
//     }
//     squareSelected(squareClicked, squareClickedIndex);
// }

// function squareSelected(squareClicked, squareClickedIndex) {
//     game.gameBoard[squareClickedIndex] = game.currentPlayer;
//     squareClicked.innerHTML = game.player1.icon || game.player2.icon;
//     console.log('click')
// }











