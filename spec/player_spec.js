describe("Player", () => {
    var player;

    beforeEach(function() {
        player = new Player('Dollop');
    });

    it("has a name", function() {
        expect(player.name).toEqual('Dollop');
    });
});
