var Controller = (function () {
    function Controller (model, view) {

        var self = this;

        console.log('init Controller');
        this.view = view;
        this.model = model;

        //Первоначальная отрисовка списка
        this.show();
        this.view.addChanels('addItem', function (title) {
            self.setItem(title);
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

    return Controller;
})();
