function Letter(l) {
    this.letter = l;
    this.guessed = false;
    this.toString = function () {
        if (this.guessed) return this.letter;
        else return "_";
    }
    this.check = function (c) {
        var correct = false;
        if (c.toLowerCase() === this.letter.toLowerCase()) {
            if(!this.guessed) correct = true;
            this.guessed = true;
        }
        return correct;
    }
}

module.exports = Letter;