var View = (function () {
	function View () {
		console.log('view');
		
		this.activeBtn = $('#active');
        this.input = $('.new-todo');
        this.output = $('.todo-list');
	}
	return View;
})()