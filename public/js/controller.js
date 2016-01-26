/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Controller = (function () {
    function Controller(model, view) {
        console.log('init Controller');
        var self = this;

        this.view = view;
        this.model = model;

        //Первоначальная отрисовка списка
        this.show();
        this.view.addChannels('addItem', function (title) {
            self.setItem(title);
        });
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    Controller.prototype.setItem = function (title) {
        this.model.setItem(title);
        this.show();
    };

    return Controller;
})();