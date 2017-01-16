describe("SlotMachine", function() {
    var slotMachine;

    beforeEach(function() {
        this.dollop = new Player('Dollop');
        this.elsie = new Player('Elsie');

        slotMachine = new SlotMachine([this.dollop, this.elsie]);
    });

    it("can see if its a winner", function() {
        slotMachine._random = () => {return 0.9;};
        expect(slotMachine.isWin()).toEqual(true);

        slotMachine._random = () => {return 0.1;};
        expect(slotMachine.isWin()).toEqual(false);
    });

    it("can pick a winner", function() {
        slotMachine._random = () => {return 0.9;};
        expect(slotMachine.pickWinner()).toEqual(this.elsie);
    });

});
