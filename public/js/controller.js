/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Controller = (function () {
    function Controller(model, view) {
        var self = this;
        this.view = view;
        this.model = model;

        this.view.render(this.model.get());
        this.view.turnTheLight(function (color) {
            self.changeColor(color);
        })
    }

    Controller.prototype.changeColor = function (color) {
        this.model.setColor(color);
        this.view.render(this.model.get());
    };

    return Controller;
})();