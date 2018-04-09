var Letter = require("./Letter.js");

function Word(word) {
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word.charAt(i)));
    }

    this.toString = function () {
        var string = "";
        for (var i = 0; i < letters.length; i++) {
            string = string.concat(" ", letters[i]);
        }
        return string;
    }

    this.check = function (c) {
        for (var i = 0; i < letters.length; i++) {
            letters[i].check(c);
        }
    }
}