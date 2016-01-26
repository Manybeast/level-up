(function () {
	function TodoList () {
    //Точка входа в приложение в этом месте инициализируются все сущности,
    //происходит первоначальное конфигурирование приложения
		this.model = new Model();
		this.view = new View();
		this.controller = new Controller(this.model, this.view);
	}

	var todoList = new TodoList();
})();
