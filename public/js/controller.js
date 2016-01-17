/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function (window) {
    function Controller (model, view) {
        var self = this;

        this.view = view;
        this.model = model;

        //Первоначальная отрисовка списка

        this.view.bind('addItem', function (title) {
            debugger;
            self.model.setItem(title);
            self.show();
        });

        this.show();
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };


    window.app = window.app || {};
    window.app.Controller = Controller;
})(window);