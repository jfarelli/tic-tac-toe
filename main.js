// var Player = 'player.js';

// Class & Global Variables
// var sleuth = new Player({ name: 'Sleuth', turn: false, winner: false, wins: 0});
// var hooligan = new Player({ name: 'Hooligan', turn: false, winner: false, wins: 0 });
const sleuth = 'sleuth'
const hooligan = 'hooligan'
var sleuthTurn;

// querySelectors
var gameBoardSquares = document.querySelectorAll('[game-square]');


// eventListeners
gameBoardSquares.forEach(square => {
    square.addEventListener('click', squareClicked, {once: true})
})


function squareClicked(e) {
    var square = e.target;
    const currentPlayer = sleuthTurn ? hooligan : sleuth; //breakdown and convert to if/else
    placeIcon(square, currentPlayer);
    whosTurn();
    //check for win by running through an array of possible outcomes of 3 in a row
    //check for draw if there are no connections of 3
}

function placeIcon(square, currentPlayer) {
    square.classList.add(currentPlayer)
}

function whosTurn() {
    sleuthTurn = !sleuthTurn
}


