describe("SlotMachine", () => {
    var slotMachine;

    beforeEach(() => {
        this.dollop = new Player('Dollop');
        this.elsie = new Player('Elsie');
        $('body').append('<div class="machine"><div class="ring"></div></div>');

        slotMachine = new SlotMachine($('.machine'), [this.dollop, this.elsie]);
    });

    afterEach(() => {
        $('.ring').remove();
    });

    it("can see if its a winner", () => {
        slotMachine._random = () => {return 0.9;};
        expect(slotMachine.isWin()).toEqual(true);

        slotMachine._random = () => {return 0.1;};
        expect(slotMachine.isWin()).toEqual(false);
    });

    it("can pick a winner", () => {
        slotMachine._random = () => {return 0.9;};
        expect(slotMachine.pickWinner()).toEqual(this.elsie);
    });

    it("can activate", () => {
        slotMachine.activate();
        expect($('.ring').hasClass('active')).toEqual(true);
    });

});
