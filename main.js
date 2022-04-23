// var Player = 'player.js';
var game = new Game();
// var playerTurn = document.querySelector('.player-turn');
// var sleuth = new Player("Sleuth", 'assets/detective.svg');
// var hooligan = new Player("Hooligan", 'assets/Burgler.svg');
// var currentTurn = `It's the ${sleuth}'s Turn!` || `It's the ${hooligan}'s Turn!`
// gameBoardSquares.forEach(square => square.addEventListener('click', handleSquareClicked, {once: true}))
var winningMessage = document.getElementById("winningMessage")
var winningText = document.querySelector(".winning-text")
var gameBoardSquares = document.querySelectorAll('.cell')


gameBoardSquares.forEach(square => {
    square.addEventListener('click', squareClicked, {once: true})
})






function squareClicked(e) {
    var square = e.target;
    var sleuth = 'sleuth'
    var hooligan = 'hooligan'
    const playerMove = game.currentPlayer ? hooligan : sleuth;
    placeIcon(square, playerMove);
    game.whosTurn();
    if (winningConditions(playerMove)) {
        gameCompleted(false);
        // console.log('winner')
    }
    //check for win by running through an array of possible outcomes of 3 in a row
    //check for draw if there are no connections of 3
}

function gameCompleted(draw) {
    if (draw) {

    } else {
        winningText.innerText = `The ${game.currentPlayer ? 'Sleuth' : 'Hooligan'} wins!`
    }
    winningMessage.classList.add('show');
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