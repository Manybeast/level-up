var Model = (function () {
	function Model () {
		this.studentsList = [{
				id: 0,
				name: 'Ivan',
				age: 19,
				evaluation: 8
			},
			{
				id: 1,
				name: 'Lena',
				age: 21,
				evaluation: 10
			},
			{
				id: 2,
				name: 'Petr',
				age: 20,
				evaluation: 7
			},
			{
				id: 3,
				name: 'Anna',
				age: 17,
				evaluation: 9
			},
			{
				id: 4,
				name: 'Vasya',
				age: 22,
				evaluation: 9
			}];

		console.log('init Model')
	}

	function generateId () {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

    Model.prototype.getStudents = function () {
    	return this.studentsList;
    };

	return Model;
})();