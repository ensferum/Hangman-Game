// Creating shark word bank
var wordBank = ["megaladon", "bull", "thresher", "blue", "tiger", "mako"];

//Sets an array for if a word was used
var wasWordUsed = [];

//Documents the number of wins
var wins = document.getElementById("wins");

//Documents lives left
var lives = document.getElementById("lives");

//Shows the current word
var currentWord = document.getElementById("currentWord");

//Shows the letters used
var lettersUsed = document.getElementById("lettersUsed");

//Sets initial wins to 0
var beginGame = 0;

//Shows the number of wins
wins.innerHTML = "You have won" + beginGame + "times";

//Sets array for the game
var gameBoard = [""];

//Stores the letters that have been guessed
var guessedLetters = [];

for (var i = 0; i < wordBank.length; i++) {

    lettersUsed.push(false);
}

randomAnswer();



function randomAnswer() {
    var board= "";
    var random = 0;
    var tempTrue = true;

    while(wasWordUsed[random]||tempTrue) {
    
        // random=
        answer = wordBank[random];
        tempTrue= false;
    }

    for (var i = 0; i <answer.length; i ++) {
        gameBoard[i]= "-";
        board = board + gameBoard[i]+ " ";
    }

    currentWord.innerHTML = "<p>" + board + "<p>";
}

setAnswer();
letter.innerHTML= "";