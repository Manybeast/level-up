var Controller = (function () {
    function Controller (model, view) {

        var self = this;

        console.log('init Controller');
        this.view = view;
        this.model = model;
        this.uncompletedCount = null;
        this.completed = null;

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
        this.view.input.val('');
    };

    Controller.prototype.completeItem = function (id) {
        this.model.completeItem(id);
        this.show();
        this.view.input.val('');
    };

    Controller.prototype.leftItems = function () {
        this.uncompletedCount = this.model.getAll().filter(function (item) {
                return item.completed === false;
            });

        $('.todo-count')
            .html('<strong>' + this.uncompletedCount.length + ' ' + '</strong>' + 'items left');
    };

    Controller.prototype.getComplited = function () {
        this.model.getALL().filter(function (item) {
            return item.completed === true;
        });

    };

    return Controller;
})();
