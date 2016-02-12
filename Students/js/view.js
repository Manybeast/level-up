var View = (function () {
	function View () {
		this.name = $('#name');
		this.age = $('#age');
		this.evaluation = $('#evaluation');

		console.log('init View');
	}

	View.prototype.createOne = function (item) {
		var defaultName = '<li data-id="{{id}}">{{name}}</li><hr/>',
			defaultAge = '<li data-id="{{id}}">{{age}}</li><hr/>',
			defaultEvaluation = '<li data-id="{{id}}">{{evaluation}}</li><hr/>',
			newName = defaultName.replace('{{id}}', item.id),
			newAge = defaultAge.replace('{{id}}', item.id),
			newEvaluation = defaultEvaluation.replace('{{id}}', item.id);

			newName = newName.replace('{{name}}', item.name);
			newAge = newAge.replace('{{age}}', item.age);
			newEvaluation = newEvaluation.replace('{{evaluation}}', item.evaluation);

			this.name.append(newName);
			this.age.append(newAge);
			this.evaluation.append(newEvaluation);
	}

	View.prototype.createAll = function (list) {
		var self = this;

		this.name.html('');
		this.age.html('');
		this.evaluation.html('');

		list.forEach(function (item) {
			self.createOne(item);
		});
	}

	return View;
})();