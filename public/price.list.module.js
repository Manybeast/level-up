var PriceList = (function () {
	function Constructor (parentElement) {
		var self = this;

		this.items = [];
		this.parent = document.querySelector(parentElement);
		this.input = this.parent.querySelector('.input');
		this.btnAdd = this.parent.querySelector('.btnAdd');
		this.output = this.parent.querySelector('.output');

		this.addEvents();
		API._get('fruites', this.callback());
	}

	Constructor.prototype.callback = function () {
		var self = this;

		return function (res) {
			self.items = res;
			self.renderAll();
		}
	};

	Constructor.prototype.renderOne = function (elemText, i) {
		var _element = document.createElement('li'),
			_title = document.createElement('span'),
			_btnRemove = document.createElement('span');

		_element.classList.add('item');
		_title.innerHTML = elemText;
		_btnRemove.innerHTML = 'delete';
		_btnRemove.classList.add('btnRemove', 'btn');
		_element.appendChild(_title);
		_element.appendChild(_btnRemove);

		return _element;
	};

	Constructor.prototype.renderAll = function () {
		var self = this;
		this.output.innerHTML = '';
		this.items.forEach(function (item, i) {
			self.output.appendChild(self.renderOne(item, i));
		});
	};

	Constructor.prototype.sendItem = function (item) {
		var sendedData = {
			fruite: item
		};

		API._post('fruites', sendedData, this.callback());
	};

	Constructor.prototype.addEvents = function () {
		var self = this;

		this.btnAdd.addEventListener('click', function () {
			debugger;
			if(self.input.value) {
				self.sendItem(self.input.value);
			}
		})
	};

	return Constructor;
})();

