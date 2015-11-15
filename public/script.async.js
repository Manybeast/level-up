var fruites = null;
API.get('fruites', printFruites);

addFruite.addEventListener('click', function () {
	addFruites();
	input.value = '';
});
input.addEventListener('keydown', function (e) {
	if(e.keyCode === 13) {
		addFruites();
		input.value = '';
	}
});


function printFruites (data) {// Функция которая сработает в тот момент когда придет ответ от сервера
	output.innerHTML = '';
	data.forEach(function (item, i) {
		print(item, i);
	});
}

function addFruites () {
	var _data;
	if (input.value) {
		_data = {
			fruite: input.value
		};
		API.post('fruites', _data, printFruites);
	}
	
}

function print (el, i) {
	var li = document.createElement('li');

	li.innerHTML = el;
	li.id = i;
	li.classList.add('item');
	li.addEventListener('click', function () {
		remove(i);
	});
	output.appendChild(li);
}

function remove (index) {
	API.delete('fruites/' + index, printFruites);
}
