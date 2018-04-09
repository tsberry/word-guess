var Letter = require("./Letter.js");

function Word(word) {
    this.letters = [];
    for(var i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word.charAt(i)));
    }

    function toString() {
        var string = "";
        for(var i = 0; i < letters.length; i++) {
            string = string.concat(" ", letters[i].display());
        }
        return string;
    }

    function check(c) {
        for(var i = 0; i < letters.length; i++) {
            letters[i].check(c);
        }
    }
}