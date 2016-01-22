var Controller = (function () {
	function Controller() {
		console.log('Controller');

		this.view = view;
		this.model = model;

		this.show();
	}
	
	Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    return Controller;
})()