# Tic-Tac-Toe: Sleuth vs. Hooligan

## Will the law win, or will crime pay?!

* Welcome to final solo project at [Turing](https://turing.edu/) within the [Front-End Program](https://frontend.turing.edu/)!

* For this project, we were presented with an opportuity to build out a classic head-to-head game!

### How to play!

* Open the webpage to begin: [Tic-Tac-Toe](https://jfarelli.github.io/tic-tac-toe/)
* Upon opening the page, you're be presented with a cleared board. 
* The Sleuth starts out as he hunts for the shifty Hooligan! Feel free to click on any square to begin, and the player change will show up under the title after a move has been made! 
* Upon a win, a pop-up will show declaring the winner and a point will be added to their **"Win Count"**.
* After a brief pause, the game board will reset.
* If the Sleuth catches his criminal (wins), the Hooligan will start the next game in his attemt to escape capture! If the Hooligan escapes (wins), then it will be Sleuth's turn to catch him!
<br>

**Declaring the winner**

[Winner](https://user-images.githubusercontent.com/97558758/165325346-4a02018f-ee67-49aa-9aa0-d99acd836569.mov)

<details>
<summary>Details</summary>
<br>

**Starting the game:**
To get the game to start on a cleared board, I envoke a startGame function at the start of my code, so it's the first thing the system recognizes. This then looks to the gameStart function which is written to clear all the player icons from the board, ensure that the pop-up message is removed, displays the current players turn, and after games are won, it will change the player turn, and ensure that win counts are updated.



**Changing Turns:**
To get the player change to happen, I wrote a whoseTurn function that detects the current player and switches to the other player after a move is made. 
This function is then invoked in the displayPlayerTurn function which displays the current player on the board.



**Declaring a winner:**
To know when a winner is declared, I took a more streamlined approach. I wanted to do more with less. Instead of having big chunky code, I looked up more advanced methods to make sure my approach would work. 
The function I wrote for whoWins, uses the .some() method to look through each combo in the winningNumbers array to detect what a winning combination is. This method is then connected by the .every() method (which tests if the elements in the array pass the test that the .some() method laid out) to look at every square on the board to check that a player has a winning combination. If a combo is detected using a certain players icon, then the whoWins() funtion is envoked in a conditional statement within the squareClicked() function (which detects the clicks on the board) and if a winner is declared, the gameCompleted() function is then ran to display the Winning Message pop-up, displaying the winning player, and also updated that player's winCount().
The board resets after a brief pause usind a timeOut function.

</details>
<br>

* In the event of a draw, a pop-up window will display declaring **"It's a stalemate!"**
* The game will then restart after a brief pause, having the player that didn't start the turn start the new game.
<br>

**Stalemate**

[Stalemate](https://user-images.githubusercontent.com/97558758/165327352-91cb3534-4a93-4bd1-a32d-0c44e274e86f.mov)

<details>
<summary>Details</summary>
<br>

**Declaring a Stalemate:**
To declare the draw, I wrote the itsADraw() function which uses the .every() method again to check that every square is occupied by either players icons. Once it's detected that all squares are filled, this function is then also linked to the squareClicked() function in a conditional. If this conditional is met, the gameCompleted() function is then ran to display the stalemate message within a pop-up. 
The board then resets after a brief pause using a timeOut() function, and then the turn is changed to the player that didn't start the previous round. This is accomplished due to the invocation of the .playerChangeAfterWin() function within the gameStart() function. This function detects the player that won, and then resets the currentPlayer boolean value, so that it changes to the other player on a new game.

</details>
<br>

### Challenges
This project stretched me to my (current) limits. I found this extremely challenging, because this was a project where we, the students, had to plan out this project from scratch.

<details>
<summary>Details</summary>
<br>
The planning phase was very important to this project. I started by listing out how I thought the game would function. It was mainly brief steps, such as: 

1. Game should start with a fresh board.
2. Each square should detect a click, and which player clicked.
3. Player move should change after current player has made a move.
4. Once a combo is declared, a winning message should be displayed.
5. Etc...

From brief steps, details started to form:
1. Game should start with a fresh board.
    * Need a reset board function to clear board
    * Need player turn to update on restart, so it's the other player's turn.
    * Make sure win counts are updated.

2. Each square should detect a click, and which player clicked.
    * Should know whos turn it is.
    * Should display current player turn.
    * Should detect a win.
    * Should run another function to display winner.

After the initial logic and some details were formed, I started moving my notes to pseudocode within my .js files.

That's where the real challenge formed. What do I even begin with?!?!
It was an incredible challenge to even start writing functions, and deciding what functions I should start with, what they should include, and if they were updating the data, or manipulating the DOM. The whole thing through me for a loop. 
After about a full day filled with stress and questioning what I got myself into, I started chipping away. 
Initial ideas, turned to functionality. That functionality drove other functionality. Variables were created, methods were used, codes were broken, error messages were had, and the beat goes on.
Throughout the process, I felt all of the emotions: frustration, anger, happiness, sadness, more frustration, more anger, and then finally (FINALLY!!!) it all washed away after I saw that my code worked and my game was functional. **What a ride!!!**
</details>


### Future Itterations:
For future itterations, I would like to write out code that implements local storage. This is a feature that has been suggested in most of our projects as "extra". However, I feel that it's very important to learn, so I hope someday to implement it on this, and future projects.


### Reflection:
Within this project and throughout MOD 1, I have been fed information at an accelerated rate, and I can't say that I've absorbed everything. There's a saying here that the information given is like getting a firehose to the face. You're not going to absorb everything.

However, while gettign blasted day after day, I am still very intrigued. 
There is so much information out there, and different ways to do the same thing, that it drives me to learn more (be it in class, or searching new methods on the web). 
My brain is full to bursting on a daily basis, and I come back day after day to get my fill.
My hope is that pass on to the next module, so that I can continue to expand on the fundamentals taght and get the opportunity to build more advanced programs.

<br>







**Languages used:**<br>
JavaScript
<br>
CSS
<br>
HTML

