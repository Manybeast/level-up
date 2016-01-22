var View = (function (){
	function View (){
		console.log('View init');
		this.activeBtn = $('#active');
        this.input = $('.new-todo');
        this.output = $('.todo-list');
	}
	View.prototype.render = function (todos){
		
		
	}	
	
	
	
	return View;
})();