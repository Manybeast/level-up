var myAPI = {
	connectRead: function (url, callback) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url, true);
		xhr.send();

		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4) return;

			if (xhr.status != 200) {
				console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
			} else {
				callback(JSON.parse(xhr.response));
			}
	  	};
	},

	connectWrite: function (url, data, callback) {
			var xhr = new XMLHttpRequest();
			var _sendedData = JSON.stringify(data);

			xhr.open('POST', url, true);
			xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

			xhr.send(_sendedData);

			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;

				if (xhr.status != 200) {
					console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
				} else {
					callback(JSON.parse(xhr.response));
				}
		  	};
		},

	connectDelete: function (url, callback) {
			var xhr = new XMLHttpRequest();

			xhr.open('DELETE', url, true);

			xhr.send();

			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;

				if (xhr.status != 200) {
					console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
				} else {
					callback(JSON.parse(xhr.response));
				}
		  	};
	},

	connectChange: function (url, data, callback) {
			var xhr = new XMLHttpRequest();
			var _sendedData = JSON.stringify(data);

			xhr.open('PUT', url, true);
			xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

			xhr.send(_sendedData);

			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;

				if (xhr.status != 200) {
					console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
				} else {
					callback(JSON.parse(xhr.response));
				}
		  	};
		}
};