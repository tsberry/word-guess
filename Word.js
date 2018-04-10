var Letter = require("./Letter.js");

function Word(word) {
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word.charAt(i)));
    }

    this.guesses = [];
}

Word.prototype.toString = function () {
    var string = "";
    for (var i = 0; i < this.letters.length; i++) {
        string = string.concat(" ", this.letters[i]);
    }
    return string;
}

Word.prototype.check = function (c) {
    var correct = false;
    for (var i = 0; i < this.letters.length; i++) {
        var bool = this.letters[i].check(c);
        correct = correct || bool;
    }
    this.guesses.push(c.toLowerCase());
    return correct;
}

Word.prototype.complete = function () {
    var complete = true;
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].guessed) complete = false;
    }
    return complete;
}

module.exports = Word;