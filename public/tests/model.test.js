/**
 * Created by IlyaLitvinov on 11.02.16.
 */
describe("Model", function() {
    var model = null;

    beforeEach(function() {
        model = new Model();
    });

    it("Should have method getItem, setItem, deleteItem", function() {
        expect(model.setItem).toBeDefined();
        expect(model.getItems).toBeDefined();
        expect(model.deleteItem).toBeDefined();
    });

    it("Should have propertie item", function () {
        expect(model.items).toBeDefined();
    });
    it("Items should be an array", function () {
        expect(model.items instanceof Array).toBe(true);
    });
    it("Should delete item by id", function () {
        spyOn(model.items, 'splice');

        model.deleteItem(0);

        expect(model.items.splice).toHaveBeenCalled();
    });
    it('Should add item', function () {
        var length = model.items.length,
            title = 'Jasmine test';

        model.setItem(title);

        expect(model.items.length).toEqual(length+1);
        expect(model.items[length].title).toEqual(title);
    })
});