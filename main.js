// var Player = 'player.js';

// Class & Global Variables
var sleuth = new Player({ name: 'Sleuth', turn: false, token: img: 'assets/detective.svg', winner: false, wins: 0});
var hooligan = new Player({ name: 'Hooligan', turn: false, token: icon, winner: false, wins: 0 });
var playerTurn = sleuth.name || hooligan.name;
var detectiveTurn;

// querySelectors
var gameBoardSquares = document.querySelectorAll(".cell");


// eventListeners
gameBoardSquares.forEach(square => {
    square.addEventListener('click', squareClicked, {once: true})
})


// function playerPlacement(square, playerTurn) {
//     square.classList.add(playerTurn);
// }


function squareClicked(event) {
    var square = event.target;
    whosTurn();
    // playerPlacement();
}


function whosTurn() {
    if (detectiveTurn === sleuth.name) {
        sleuth.turn = true;
        return `It's the ${sleuth.name}'s Turn!`;
    } else if (detectiveTurn === hooligan.name) {
        hooligan.turn = true;
        return `It's the ${hooligan.name}'s Turn!`;
    }
}


// createElement function to display icons after click