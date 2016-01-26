/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Controller = (function () {
    function Controller (model, view) {
        this.view = view;
        this.model = model;

        //Первоначальная отрисовка списка
        this.show();
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    return Controller;
})();