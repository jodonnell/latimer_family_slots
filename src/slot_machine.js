class SlotMachine {
    constructor(players) {
        this.players = players;
        this.handle = new Handle($('.arm'), this);
    }

    isWin() {
        return this._random() > 0.75;
    }

    pickWinner() {
        let winningIndex = Math.floor(this._random() * this.players.length);
        return this.players[winningIndex];
    }

    _random() {
        return Math.random();
    }

    activate() {

    }
}
