/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function (window) {
    function Controller (model, view) {
        var self = this;

        this.model = model;
        this.view = view;

        this.show();
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    window.TodoList = window.TodoList || {};
    window.TodoList.Controller = Controller;
})(window);