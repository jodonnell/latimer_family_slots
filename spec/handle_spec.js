describe("Handle", () => {
    var handle, slotMachine;

    beforeEach(() => {
        $('body').append('<div class="arm"></div>');
        slotMachine = new SlotMachine([]);
        spyOn(slotMachine, "activate");
        handle = new Handle($('.arm'), slotMachine);
    });

    afterEach(() => {
        $('.arm').remove();
    });

    it("puts a click handler on the arm and adds clicks", function() {
        $('.arm').click();
        expect($('.arm').hasClass('clicked')).toEqual(true);
    });

    it("finishes the animation", function(done) {
        handle._handleAnimationTime = () => {return 1;};
        $('.arm').click();
        setTimeout(() => {
            expect($('.arm').hasClass('clicked')).toEqual(false);
            done();
        }, 2);
    });

    it('makes the machine spin', () => {
        $('.arm').click();
        expect(slotMachine.activate).toHaveBeenCalled();
    });

});
