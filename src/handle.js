class Handle {
    constructor($handle, slotMachine) {
        this.$handle = $handle;
        this.slotMachine = slotMachine;

        this.$handle.on('click', () => { this.clickedHandle() });
    }

    clickedHandle() {
        this.slotMachine.activate();
        this.$handle.addClass('clicked');

        setTimeout(() => {
            this.$handle.removeClass('clicked');
        }, this._handleAnimationTime());
    }

    _handleAnimationTime() {
        return 500;
    }
}
