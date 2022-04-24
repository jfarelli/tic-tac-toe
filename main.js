var playerTurnText = document.querySelector('.player-turn');
var winningText = document.querySelector(".winning-text");
var winningMessage = document.getElementById("winningMessage");


// var playerTurn = document.getElementById('displayTurn');
// playerTurn.innerHTML = displayPlayerTurn();
// var playerTurnDisplay = document.querySelector('player-turn');

var game = new Game();
var sleuth = new Player();
var hooligan = new Player();
var restartButton = document.getElementById("restartButton")
var gameBoardSquares = document.querySelectorAll('.cell')




gameStart();

restartButton.addEventListener('click', gameStart);


function gameStart() {
    game.currentPlayer = false;
    gameBoardSquares.forEach(square => {
        square.classList.remove('hooligan');
        square.classList.remove('sleuth');
        square.addEventListener('click', squareClicked, {once: true})
        displayPlayerTurn();
    })
    winningMessage.classList.remove('show');
   
}

function squareClicked(e) {
    var square = e.target;
    const sleuth = 'sleuth';
    const hooligan = 'hooligan';
    const playerMove = game.currentPlayer ? hooligan : sleuth;
    displayPlayerTurn();
    // game.whosTurn();
    iconPlacement(square, playerMove);
    if (winningConditions(playerMove)) {
        gameCompleted(false);
    } 
    if (itsADraw()) {
        gameCompleted(true);
    } 
}

function gameCompleted(draw) {
    if (draw) {
        winningText.innerText = `It's a stalemate!`
    } else {
        winningText.innerText = `The ${game.currentPlayer ? 'Sleuth' : 'Hooligan'} wins!`
        // player.increaseWins()
    }
    winningMessage.classList.add('show');
}

function itsADraw() {
    return [...gameBoardSquares].every(square => {
        return square.classList.contains('sleuth') || square.classList.contains('hooligan');
    })
}

function iconPlacement(square, playerMove) {
    square.classList.add(playerMove)
}

function winningConditions(playerMove) {
    return game.winningNumbers.some(combination => {
        return combination.every(square => {
            return gameBoardSquares[square].classList.contains(playerMove)
        })
    })
}

function displayPlayerTurn() {
    game.whosTurn()
    playerTurnText.innerText = `It's the ${game.currentPlayer ? 'Hooligan' : 'Sleuth'}'s turn!`
    
}

// a win should add 1 to player.wins
// should be displayed on the screen
// should be updated every win
function displayPlayerWins() {
    if (winningConditions(playerMove) {

    })
}



// function displayPlayerTurn(playerMove) {
//     // game.currentPlayer = `It's the ${game.currentPlayer}'s turn!`
//     if (winningConditions(playerMove)) {
//         return playerMove.playerTurn.innerHTML = `It's ${game.currentPlayer}'s Turn!`;
//     }
//     // if (game.currentPlayer === 'sleuth') {
//     //     return playerTurn.innerHTML = `It's ${game.currentPlayer}'s Turn!`;
//     // } else if (game.currentPlayer === 'hooligan') {
//     //     return playerTurn.innerHTML = `It's ${game.currentPlayer}'s Turn!`;
//     // }
// }


































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











