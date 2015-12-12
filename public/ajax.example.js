/**
 * Created by IlyaLitvinov on 12.12.15.
 */
function getRequest () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'fruites', false);

    xhr.send();

    console.log(xhr.response);
}

function postRequest () {
    var xhr = new XMLHttpRequest(),
        data = {
            fruite: "test"
        };

    xhr.open('POST', 'fruites', false);

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(data));

    console.log(JSON.parse(xhr.response));
}

function putRequest () {
    var xhr = new XMLHttpRequest(),
        data = {
            fruite: "test"
        };

    xhr.open('PUT', 'fruites/0', false);

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(data));

    console.log(JSON.parse(xhr.response));
}


function deleteRequest () {
    var xhr = new XMLHttpRequest(),
        data = {
            fruite: "test"
        };

    xhr.open('DELETE', 'fruites/3', false);

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send();

    console.log(JSON.parse(xhr.response));
}

postRequest();
putRequest();
postRequest();
deleteRequest();

//
//var xhr = new XMLHttpRequest();//Обьект который позволяет совершать запросы на сервер
//+
//    +		xhr.open('GET', url, true);
//+		xhr.send();
//+
//    +		xhr.onreadystatechange = function() { // (3)
//    +			if (xhr.readyState != 4) return;
//    +
//        +			if (xhr.status != 200) {
//        +				console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
//        +			} else {
//        +				callback(JSON.parse(xhr.response));//Вызов коллбека(getFruites)
//        +			}
//    +  		};