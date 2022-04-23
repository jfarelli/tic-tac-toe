// var Player = 'player.js';
var game = 'game.js';
var playerTurn = document.querySelector('.player-turn');
var sleuth = new Player({name: "Sleuth"});
var hooligan = new Player({name: "Hooligan"});
var currentPlayerTurn = `It's the ${sleuth}'s Turn!` || `It's the ${hooligan}'s Turn!`
var gameBoardSquares = document.querySelectorAll('.cell');
gameBoardSquares.forEach(square => square.addEventListener('click', handleSquareClicked, {once: true})
)

// document.querySelector('.restart-button').addEventListener('click', handleRestartGame);
var gameBoard = ["", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var isGameSet = true;

function handleSquareClicked(e) {
    const squareClicked = e.target;
    const squareClickedIndex = parseInt(
        squareClicked.getAttribute('game-square-index')
      );
      if (gameBoard[squareClickedIndex] !== "" || !isGameSet) {
        return;
    }
    squareSelected(squareClicked, squareClickedIndex);
}


function squareSelected(squareClicked, squareClickedIndex) {
    gameBoard[squareClickedIndex] = currentPlayer;
    squareClicked.innerHTML = currentPlayer;
    console.log('click')
}




























// // Class & Global Variables

// const sleuth = 'sleuth'
// const hooligan = 'hooligan'
// var sleuthTurn;

// // querySelectors


// // eventListeners



// function squareClicked(e) {
//     var square = e.target;
//     const currentPlayer = sleuthTurn ? hooligan : sleuth; //breakdown and convert to if/else
//     placeIcon(square, currentPlayer);
//     whosTurn();
//     //check for win by running through an array of possible outcomes of 3 in a row
//     //check for draw if there are no connections of 3
// }

// function placeIcon(square, currentPlayer) {
//     square.classList.add(currentPlayer)
// }

// function whosTurn() {
//     sleuthTurn = !sleuthTurn
// }


