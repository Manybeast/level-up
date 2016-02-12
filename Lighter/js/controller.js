var Controller = (function () {

    function Controller (model, view) {
        console.log('init Controller');

        var self = this;

        this.view = view;
        this.model = model;

        this.show();
        this.switchColor();
        this.view.switchColor(function (color) {
            self.switchColor(color);
        });

	}

	Controller.prototype.show = function () {
		this.view.render(this.model.getLights());
	};

    Controller.prototype.switchColor = function (color) {
        this.model.switchColor(color);
        this.show();
    };

    return Controller;
})();
