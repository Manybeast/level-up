(function () {
	function TodoList () {
		this.model = new Model();
		this.view = new View();
		this.controller = new Controller(this.model, this.view);
	}

	var todoList = new TodoList();
})();