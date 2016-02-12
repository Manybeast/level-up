(function () {
	function StudentsList () {
		this.model = new Model();
		this.view = new View();
		this.controller = new Controller (this.model, this.view);
	}

	var studentList = new StudentsList();

	console.log('init Main')
})();