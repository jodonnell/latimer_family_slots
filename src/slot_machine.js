class SlotMachine {
    constructor($container, players) {
        this.$container = $container;
        this.players = players;
        this.handle = new Handle(this.$container.find('.arm'), this);
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
        this.$container.find('.ring').addClass('active');
        //this.$container.find('.ring').css('-webkit-animation-duration', '4.5s');
    }
}
