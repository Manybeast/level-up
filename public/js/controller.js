var Controller = (function () {
    function Controller (model, view) {
        console.log('init Controller');
        this.view = view;
        this.model = model;

        this.show();
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    return Controller;
})();