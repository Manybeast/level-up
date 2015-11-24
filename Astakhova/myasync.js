
notebook = (function(){
	function Constructor(wraper){
		console.log('Constructor done');
		this.ul = '';
	}

	Constructor.prototype.init = function () {
		var btn = document.querySelector('.btnGet'),
		      input = document.querySelector('.input');

		btn.addEventListener('click', this.addItem.bind(this));
		input.addEventListener('keydown', function(e) {
			if (e.keyCode === 13) {
				this.addItem(); }
		}.bind(this));

		myAPI.connectRead('fruites', this.printList.bind(this));
	}

	Constructor.prototype.printList = function(list) {
		var	ul = document.querySelector('.output');
		ul.innerHTML = '';
		list.forEach(this.insertItem.bind(this));
	}

	Constructor.prototype.insertItem = function(item, i) {
		var ul = document.querySelector('.output'),
		      li = document.createElement('li'),
		      btn = document.createElement('input'),
		      span = document.createElement('span');

		btn.id = 'btn'+i;
		btn.type = 'button';
		btn.value = 'delete';
		btn.className = 'btn';
		btn.addEventListener('click', function() {
			this.deleteItem(i)
		}.bind(this));

		li.id = 'item'+i;
		li.className = 'item';
		span.innerHTML = item;

		span.addEventListener('click', function() {
			this.changeInputActivate(i)
		}.bind(this));

		li.appendChild(span);
		li.appendChild(btn);
		ul.appendChild(li);
	}

	Constructor.prototype.addItem = function () {
		var _input = document.querySelector('.input'),
		     data = {
		     	fruite: _input.value
		     };

		     if (data) {
		     	myAPI.connectWrite('fruites', data, this.printList.bind(this));
		     	_input.value='';
		     }
	};

	Constructor.prototype.deleteItem = function(i) {
		myAPI.connectDelete('fruites/'+i, this.printList.bind(this));
	};

	Constructor.prototype.changeItem = function(i) {
		var _input =document.querySelector('#input-change'+i);
		      data = {
		     	fruite: _input.value
		      };

		myAPI.connectChange('fruites/'+i, this.printList.bind(this));
	}

	Constructor.prototype.changeInputActivate = function(i) {
		var li = document.querySelector('#item'+i),
		     input = document.createElement('input'),
		     span = li.querySelector('span');

		span.style.display = 'none';
		input.id = 'input-change'+i;
		li.appendChild(input);
		input.addEventListener('keydown', function(e){
			if (e.keyCode === 13) {
				console.log('str91, i: '+i);
				this.changeItem(i);
			}
		}.bind(this));
	};



	return Constructor;

})();


var newList = new notebook();
var newList2 = new notebook();
newList.init();