var Word = require("./Word.js");
var inquirer = require("inquirer");

var words = ["Hello", "Goodbye", "World"];

function getWord() {
    var rand = Math.floor(Math.random() * words.length);
    return words[rand];
}

var guesses = 10;
var word = new Word.Word(getWord());

function playGame() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "guess"
        }
    ]).then(function (inquirerResponse) {
        var guess = inquirerResponse.guess;
        if(word.guesses.includes(guess)) console.log("Letter already guessed.");
        else {
            var correct = word.check(guess);
            console.log(word.toString());
            if(correct) console.log("Correct!");
            else {
                guesses--;
                console.log(`Incorrect! Guesses Remaining: ${guesses}`);
            }
        }
        if(guesses === 0 || word.complete()) {
            if(guesses === 0) console.log("Sorry, you lost. Better luck on the next word!");
            else console.log("You got it right! Next Word!");
            guesses = 10;
            word = new Word.Word(getWord());
            console.log(word.toString());
        }
        playGame();
    });
}

playGame();