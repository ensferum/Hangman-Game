// Creating shark word bank
var wordBank = ["megaladon", "bull", "thresher", "blue", "tiger", "mako"];

//Sets an array for if a word was used
var wasWordUsed = [];

//Documents the number of wins
var wins = document.getElementById("wins");

//Documents lives left
var lives = document.getElementById("lives");
var lives = 10;

//Shows the current word
var currentWord = document.getElementById("currentWord");

//Shows the letters used
var lettersUsed = document.getElementById("lettersUsed");

//Sets initial wins to 0
var beginGame = 0;

//Shows the number of wins
wins.innerHTML = "You have won " + beginGame + " times";

lives.innerHTML ="You have" + lives + "left";


//Sets array for the game
var gameBoard = [""];

//Stores the letters that have been guessed
var guessedLetters = [];

//Randomize which word is chosen from the wordBank
var rand = wordBank[Math.floor(Math.random() * wordBank.length)];

for (var i = 0; i < wordBank.length; i++) {

    wasWordUsed.push(false);
}

randomAnswer();
    


function randomAnswer() {
    var board = " ";
    var random = 0;
    var tempTrue = true;

    while (wasWordUsed[random] || tempTrue) {

        // random=
        answer = wordBank[random];
        tempTrue = false;
    }

    for (var i = 0; i < answer.length; i++) {
        gameBoard[i] = "-";
        board = board + gameBoard[i] + " ";
    }

    currentWord.innerHTML = "<p>" + board + "<p>";
}

randomAnswer();
lettersUsed.innerHTML = "";

//Setting the user key input action

document.onkeyup = function(event) 
{

    var isCorrectInput = false;
    var userGuess = event.key;
    var isFoundInWord = false;
    var doesWin = true;
    var board = "";
    var lettersDisplayed = "";
    if (userGuess.charCodeAt(0) <= 122 && userGuess.charCodeAt(0) >= 97) {

        isCorrectInput = true;
    }

    if (!isCorrectInput) {
        return;
    }

    for (var i = 0; i < answer.length; i++) {

        if (answer.charAt(i) === userGuess) {
            isFoundInWord = true;
            gameBoard[i] = userGuess;
        }

    }

    console.log(isFoundInWord);

    guessedLetters.push(userGuess);
    guessedLetters.sort();

    if (isFoundInWord) {
        for (var i = 0; i < gameBoard.length; i++) {
            board = board + gameBoard[i] + " ";
            if (gameBoard[i] === "-" && doesWin) {
                doesWin = false;
            }
        }

        console.log(board);

        currentWord.innerHTML = "<p>" + board + "<p>";

    } else {
        doesWin = false;
    }


    for (var i = 0; i < guessedLetters.length; i++) {
        lettersDisplayed = lettersDisplayed + guessedLetters[i] + " ";
    }

    lettersUsed.innerHTML = "<p>" + lettersDisplayed + "<p>";

    if (doesWin) {
        reset(true);
    }

//     var resetButton = document.getElementbyId('resetButton');
//     resetButton.onclick= reloadPage;

// function reloadPage(){
//    window.location.reload();
// }

}

