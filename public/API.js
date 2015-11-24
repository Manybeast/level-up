var API = (function () {
    return {
        _get: function (url, callback) {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', 'fruites?fruite=jshgdkahjsdgkas', true);

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
        _post: function (url, data, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            xhr.send(JSON.stringify(data));

            xhr.onreadystatechange = function() { // (3)
                if (xhr.readyState != 4) return;
                debugger;
                if (xhr.status != 200) {
                    console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
                } else {
                    callback(JSON.parse(xhr.response));//Вызов коллбека(getFruites)
                }
            };

        },
        _put: '',
        _delete: ''
    }
})();
