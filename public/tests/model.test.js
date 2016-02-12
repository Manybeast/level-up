describe('Model', function () {
	var model = null;

	beforeEach(function () {
		model = new Model();
	});

	it('Shoult have items arrey', function () {
		expect(model.items).toBeDefined();
		expect(model.items instanceof Array).toBe(true);
	});
});