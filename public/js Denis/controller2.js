var Controller = (function (){
	function Controller (model, view){
		this.view = view;
		this.model = model;
		this.show ();
		console.log('Controller init');
	}
		
	Controller.prototype.show = function (){
		this.view.render(this.model.getAll());
	};
	return Controller;
})();