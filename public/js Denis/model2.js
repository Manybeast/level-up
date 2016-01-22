var Model = (function (){
	function Model (){
		this.items = [{
			id: 0,
			title: "Test",
			completed: true
		},
		{	id: 1,
			title: "Test Denis",
			completed: false
		}
					  
	]
		console.log('Model init')
	}
	
	Model.prototype.getAll = function (){
		return this.items;
	};
	
	
	
	
	
	
	
		return Model;
})();