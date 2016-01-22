var Model = (function () {

	function Model () {
		console.log('model');
		this.items = [{
			id: 0,
			title: 'qwerty',
			completed: false},

			{
			id: 1,
			title: 'asdfg',
			completed: true	}
		]
		
		 Model.prototype.getAll = function () {
        return this.items;
    };
    
	}
	return Model;
})()