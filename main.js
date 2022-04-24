// var Player = 'player.js';
var game = new Game();

// var playerTurn = document.querySelector('.player-turn');
// var sleuth = new Player("Sleuth", 'assets/detective.svg');
// var hooligan = new Player("Hooligan", 'assets/Burgler.svg');
// var currentTurn = `It's the ${sleuth}'s Turn!` || `It's the ${hooligan}'s Turn!`
// gameBoardSquares.forEach(square => square.addEventListener('click', handleSquareClicked, {once: true}))
var winningMessage = document.getElementById("winningMessage");
var winningText = document.querySelector(".winning-text");
var resetButton = document.getElementById("restartButton");
var gameBoardSquares = document.querySelectorAll('.cell');




gameStart();

resetButton.addEventListener('click', gameStart);

function gameStart() {
    game.currentPlayer = false;
    gameBoardSquares.forEach(square => {
        square.classList.remove('hooligan');
        square.classList.remove('sleuth');
        square.addEventListener('click', squareClicked, {once: true})
    })
    winningMessage.classList.remove('show');
}




function squareClicked(e) {
    var square = e.target;
    const sleuth = 'sleuth';
    const hooligan = 'hooligan';
    const playerMove = game.currentPlayer ? hooligan : sleuth;
    placeIcon(square, playerMove);
    game.whosTurn();
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
    }
    winningMessage.classList.add('show');
}

function itsADraw() {
    return [...gameBoardSquares].every(square => {
        return square.classList.contains('sleuth') || square.classList.contains('hooligan');
    })
}

function placeIcon(square, playerMove) {
    square.classList.add(playerMove)
}

function winningConditions(playerMove) {
    return game.winningNumbers.some(combination => {
        return combination.every(square => {
            return gameBoardSquares[square].classList.contains(playerMove)
        })
    })

}






























// function handleSquareClicked(e) {
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
//     game.gameBoard[squareClickedIndex] = game.playerMove;
//     squareClicked.innerHTML = game.playerMove;
//     console.log('click')
// }