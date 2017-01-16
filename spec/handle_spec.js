describe("Handle", () => {
    var handle;

    beforeEach(() => {
        $('body').append('<div class="arm"></div>');
        handle = new Handle($('.arm'));
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

});
