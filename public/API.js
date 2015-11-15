var API = {
	get: function (url, callback) {
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
  		};
	},

	post: function (url, data, callback) {
		var xhr = new XMLHttpRequest();//Обьект который позволяет совершать запросы на сервер
		var _sendedData = JSON.stringify(data);

		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhr.send(_sendedData);

		xhr.onreadystatechange = function() { 
			if (xhr.readyState != 4) return;

			if (xhr.status != 200) {
				console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
			} else {
				callback(JSON.parse(xhr.response));//Вызов коллбека(getFruites)
			}
	  	};
	},

	delete: function (url, callback) {
		var xhr = new XMLHttpRequest();//Обьект который позволяет совершать запросы на сервер
		var _sendedData = JSON.stringify();

		xhr.open('DELETE', url, true);

		xhr.send();

		xhr.onreadystatechange = function() { 
			if (xhr.readyState != 4) return;

			if (xhr.status != 200) {
				console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
			} else {
				callback(JSON.parse(xhr.response));//Вызов коллбека(getFruites)
			}
	  	};
	}
};