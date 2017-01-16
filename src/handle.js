class Handle {
    constructor($handle) {
        this.$handle = $handle;
        this.$handle.on('click', () => { this.clickedHandle() });
    }

    clickedHandle() {
        this.$handle.addClass('clicked');
        setTimeout(() => {
            this.$handle.removeClass('clicked');
        }, this._handleAnimationTime());
    }

    _handleAnimationTime() {
        return 500;
    }
}
