var Controller = (function () {
	function Controller (model, view) {
		var self = this;

		console.log('init Controller');
		this.view = view;
		this.model = model;

		this.show();
	}

	Controller.prototype.show = function () {
		this.view.createAll(this.model.getStudents());
	}

	return Controller;
})();