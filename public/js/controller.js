var Controller = (function () {
    function Controller (model, view) {

        var self = this;

        console.log('init Controller');
        this.view = view;
        this.model = model;

        //Первоначальная отрисовка списка
        this.show();
        this.view.addChanals('addItem', function (title) {
            self.setItem(title);
        });
        this.view.addChanals('deleteItem', function (id) {
            self.deleteItem(id);
        });

        this.view.addChanals('completeItem', function () {
            this.view.input.val('');
        });
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    Controller.prototype.setItem = function (title) {
        this.model.setItem(title);
        this.show();
        this.view.input.val('');
    };

    Controller.prototype.deleteItem = function (id) {
        this.model.deleteItem(id);
        this.show();
    };

    return Controller;
})();
