var fruites = null;
getBtn.addEventListener('click', function () {
	get('fruites', getFruites);
});

function get (url, callback) {
		var xhr = new XMLHttpRequest();//Обьект который позволяет совершать запросы на сервер
		
		xhr.open('GET', url, true);
		xhr.send();

		xhr.onreadystatechange = function() { // (3)
			if (xhr.readyState != 4) return;

			if (xhr.status != 200) {
				console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
			} else {
				callback(JSON.parse(xhr.response));//Вызов коллбека(getFruites)
			}
  	}
}

function post (url, data, callback) {
		var xhr = new XMLHttpRequest();//Обьект который позволяет совершать запросы на сервер
		var _sendedData = JSON.stringify(data);

		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhr.send(_sendedData);

		xhr.onreadystatechange = function() { // (3)
			if (xhr.readyState != 4) return;

			if (xhr.status != 200) {
				console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
			} else {
				callback(JSON.parse(xhr.response));//Вызов коллбека(getFruites)
			}
  	}
}

// post('sum', {
// 	a: 3,
// 	b: 4
// }, function (res) {
// 	console.log(res);
// })

function getFruites (data) {// Функция которая сработает в тот момент когда придет ответ от сервера
	data.forEach(function (item, i) {
		print(item, i);
	});
}

function print (el, i) {
	var li = document.createElement('li');

	setTimeout( function () { //Для вывода по очереди елементов списка fruites
		li.innerHTML = el;
		output.appendChild(li);
	}, i*200);
}
