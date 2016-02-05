var Controller = (function () {
    function Controller (model, view) {

        var self = this;

        console.log('init Controller');
        this.view = view;
        this.model = model;
        this.filter = 'all';

        //Первоначальная отрисовка списка
        this.show();
        this.leftItems();
        this.view.addChanals('addItem', function (title) {
            self.setItem(title);
            self.leftItems();
        });
        this.view.addChanals('deleteItem', function (id) {
            self.deleteItem(id);
            self.leftItems();
        });

        this.view.addChanals('completeItem', function (id) {
            self.completeItem(id);
            self.leftItems();
        });

        this.view.addChanals('filterBtn', function (filter) {
            self.filterBtn(filter);
        });
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getItem(this.filter));
    };

    Controller.prototype.setItem = function (title) {
        this.model.setItem(title);
        this.show();
        this.view.input.val('');
    };

    Controller.prototype.deleteItem = function (id) {
        this.model.deleteItem(id);
        this.show();
        this.view.input.val('');
    };

    Controller.prototype.completeItem = function (id) {
        this.model.completeItem(id);
        this.show();
        this.view.input.val('');
    };

    Controller.prototype.leftItems = function () {
        this.view.leftItems(this.model.leftItems().length);
    };

    Controller.prototype.filterBtn = function (filter) {
        this.filter = filter;
        this.show();
    };

    return Controller;
})();
