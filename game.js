var PlayerOne = require('./player.js');
// See about needing two player.js files...


// A way to keep track of the data for the game board:

// Need ‘click’ eventListener for board cells. Should 
// only recognize one click event for the place it’s clicked. 
// Should recognize which player is clicking. Should display 
// the players icon when clicked. Other player should not be 
// able to click on an already clicked square.
function trackPlayerWins() {
    
}



// A way to keep track of which player’s turn it currently is:

// Functionality that starts on Player 1, recognizes when Player 1 
// has clicked, then turns to Player 2 for a click on the board. 
// Maybe that has a little to do with the disable button from IdeaBox.
function whosTurn() {

}



// A way to check the Game’s board data for win conditions:

// Find a way to connect the clicked cells of each player, then 
// write functionality that recognizes the connection of 3 cells 
// (horizontal, vertical, and diagonal)

// If a player wins, a +1 should be added to their score.
function displayWins(player) {
    player.increaseWins()
}



// A way to detect when a game is a draw (no one has won):

// Functionality that recognizes there is not a connection of 
// 3 cells (horizontal, vertical, and diagonal)

// Displays text saying it’s a draw…maybe find a way to have 
// another screen come up, or a pop up that comes in front of 
// the board to display the message.
function gameDraw() {

}



// A way to reset the Game’s board to begin a new game:

// After recognizing a win, should click a button to restart 
// the game (should button already be there and disabled, or 
// maybe it shows up on the new page/pop-up if I make it), 
// or find a way to set a timer to reset the game. Pop-up 
// would be cool. 
function resetBoard() {
    
}