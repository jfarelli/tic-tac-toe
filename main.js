// var Player = 'player.js';
var game = new Game();
// var playerTurn = document.querySelector('.player-turn');
// var sleuth = new Player("Sleuth", 'assets/detective.svg');
// var hooligan = new Player("Hooligan", 'assets/Burgler.svg');
// var currentTurnTurn = `It's the ${sleuth}'s Turn!` || `It's the ${hooligan}'s Turn!`
// var gameBoardSquares = document.querySelectorAll('.cell');
// gameBoardSquares.forEach(square => square.addEventListener('click', handleSquareClicked, {once: true}))
var gameSquares = document.querySelectorAll('.cell')

gameSquares.forEach(square => {
    square.addEventListener('click', squareClicked, {once: true})
})


function squareClicked(e) {
    var square = e.target;
    var sleuth = 'sleuth'
    var hooligan = 'hooligan'
    const currentTurn = game.currentPlayer ? hooligan : sleuth;
    placeIcon(square, currentTurn);
    game.whosTurn();
    //check for win by running through an array of possible outcomes of 3 in a row
    //check for draw if there are no connections of 3
}

function placeIcon(square, currentTurn) {
    square.classList.add(currentTurn)
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
//     game.gameBoard[squareClickedIndex] = game.currentTurn;
//     squareClicked.innerHTML = game.currentTurn;
//     console.log('click')
// }