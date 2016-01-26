var Controller = (function () {
    function Controller() {
        console.log('Controller!');
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    return Controller;
})();