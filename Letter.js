function Letter(l) {
    this.letter = l;
    this.guessed = false;
    this.toString = function () {
        if (this.guessed) return this.letter;
        else return "_";
    }
    this.check = function (c) {
        if (c === this.letter) this.guessed = true;
    }
}