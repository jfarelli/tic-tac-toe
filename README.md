# Tic-Tac-Toe: Sleuth vs. Hooligan

## Will the law win, or will crime pay?!

* Welcome to my final MOD 1 solo project at [Turing](https://turing.edu/) within the [Front-End Program](https://frontend.turing.edu/)!

* For this project, we (the students) were presented with an opportuity to build out a classic head-to-head game all on our own!

### How to play:

* Open the webpage to begin: [Tic-Tac-Toe](https://jfarelli.github.io/tic-tac-toe/)
* Upon opening the page, you'll be presented with a cleared board. 
* The Sleuth starts out as he hunts for the shifty Hooligan! Feel free to click on any square to begin, and the player change will show up under the title after a move has been made! 
* Upon a win, a pop-up will show declaring the winner and a point will be added to their **"Win Count"**.
* After a brief pause, the game board will reset.
* If the Sleuth catches his criminal (wins), the Hooligan will start the next game in his attemt to escape capture! If the Hooligan escapes (wins), then it will be Sleuth's turn to catch him!
<br>

[Winner](https://user-images.githubusercontent.com/97558758/165325346-4a02018f-ee67-49aa-9aa0-d99acd836569.mov)

<details>
<summary>Game Details</summary>
<br>

**Starting the game:**<br>
To get the game to start on a cleared board, I envoke a `gameStart()` function at the start of my code, so it's the first thing the system recognizes.<br>
This then looks to the `gameStart()` function which is written to clear all the player icons from the board, ensure that the pop-up message is removed, displays the current players turn, and after games are won, it will change the player turn using the    `playerChangeAfterWin()` function, and ensure that win counts are updated in the data model, and also on the visible board by accessing the `updatePlayerWins()` function.

<br>

**Changing Turns:**<br>
Each click on the board updates the `gameBoard` array within the Game class file with the value of the player's name.
To get the player change to happen, I wrote a `whoseTurn()` function that detects the current player and switches to the other player after a move is made.<br>
This function is then invoked in the `displayPlayerTurn()` function which displays the current player on the board.

<br>

**Declaring a winner:**<br>
To know when a winner is declared, I took a more streamlined approach. I wanted to do more with less. Instead of having big chunky code, I looked up more advanced methods to make sure my approach would work.<br>
The function I wrote for `whoWins()`, uses the `.some()` method to look through each combo in the `winningNumbers` array within the Game class to detect what a winning combination is.<br>
This method is then connected by the `.every()` method (which tests if the elements in the array pass the test that the `.some()` method laid out) to look at every square on the board to check that a player has a winning combination.<br>
If a player's combo is detected, then the `whoWins()` funtion is envoked in a conditional statement within the `squareClicked()` function (which detects the clicks on the board).<br>
If a winner is declared, the `gameCompleted()` function is then ran to display the `winningMessage` pop-up, displaying the winning player, and also updates that player's win count within the data model, and visually on the board by accesing the `updatePlayerWins()` function.<br>
The board resets after a brief pause usind a `timeOut()` function, and then the `gameStart()` function runs to reset the board.

</details>
<br>

### Stalemate:

* In the event of a draw, a pop-up window will display declaring **"It's a stalemate!"**
* The game will then restart after a brief pause, having the player that didn't start the turn start the new game.
<br>


[Stalemate](https://user-images.githubusercontent.com/97558758/165327352-91cb3534-4a93-4bd1-a32d-0c44e274e86f.mov)

<details>
<summary>Stalemate Details</summary>
<br>

**Declaring a Stalemate:**<br>
To declare the draw, I wrote the `itsADraw()` function which uses the `.every()` method again to check that every square is occupied by either player.<br>
Once it's detected that the `gameBoard` and all squares are filled, this function is then also linked to the `squareClicked()` function in a conditional. If this conditional is met, the `gameCompleted()` function is then ran to display the stalemate message within a pop-up.<br> 
The `gameBoard` then resets after a brief pause using a `timeOut()` function.<br> 
Before the next turn, the `gameStart()` function is ran, clearing the board and updating data within the data model. Then the turn is changed to the player that didn't start the previous round.<br>
This player change is accomplished due to the invocation of the `playerChangeAfterWin()` function within the `gameStart()` function. This function detects the player that won, and then resets the `currentPlayer` boolean value, so that it changes to the other player on a new game.

</details>
<br>

### Challenges
This project stretched me to my (current) limits. I found this project extremely challenging, because we, the students, had to plan it out and execute it from the ground up.

<details>
<summary>Challenge Details</summary>
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

After the initial logic and details were formed, I started moving my notes to pseudocode within my .js files.

That's where the real challenge formed. What do I even begin with?!?!
It was an incredible challenge to even start writing functions. Deciding what functions I should start with, what they should include, and if they were updating the data, or manipulating the DOM. The whole thing through me for a loop. 

After about a full day filled with stress and questioning what I got myself into, I started chipping away. 

Initial ideas, turned to shell functions w/ pseudocode written inside. Those shells and pseudocode turned into functionality. That functionality drove other functionality. Variables were created, methods were used, codes were broken, error messages were had, emotions raged...and the beat goes on.

Throughout this whirlwind process, I felt frustration, anger, happiness, sadness, MORE frustration, accomplishment, new code breaking old code, MORE anger, and then finally (FINALLY!!!) it all washed away after I saw that my code worked and my game was functional. **WHAT A ROLLERCOASTER RIDE!!!**
</details>

<br>

### Future Iterations:
For future iterations, I would like to write out code that implements local storage. This is a feature that has been suggested in most of our projects as "extra". However, I feel that it's very important to learn, so I hope someday to implement it on this, and future projects.

<br>

### Reflection:
Within this project and throughout MOD 1, I have been fed information at an accelerated rate, and I can't say that I've retained everything. 

There's a saying at Turing that the information given is **"like getting a firehose to the face. You're not going to absorb everything."**

However, I've seen myself grow from the initial "What the heck?", to knowing when I need to iterate through an array, write a conditional, instantiate a class, different method uses, etc...
Even finding myeslf being able to help others, which is huge coming from a background where I knew zero code. 

My brain is full to bursting on a daily basis, and I come back day after day to get my fill. And, even after getting blasted with knowledge on the daily, after all the highs and all the lows, I am still very much intrigued with what can be accomplished within this profession. 

There is so much information out there and different ways to do accomplish functional code, that it drives me to learn more; be it in a module class, online course, or the go-to MDN website. 

My hope is to move on to the next module, so that I can continue to expand on the information taught during MOD 1, and learn to develop more integral and detailed programs.

Here's to the future!

<br>


**Languages used:**<br>
JavaScript
<br>
CSS
<br>
HTML


<br>


**Contributors:**   
Jordan Farelli: Please visit my [LinkedIn](https://www.linkedin.com/in/jordan-farelli/) and [GitHub](https://github.com/jfarelli) profiles.
