var fruites = null;
getBtn.addEventListener('click', function () {
	fruites = getItems();
	fruites.forEach(function (item, i) {
		return print(item, i);
	});
});

function getItems () {
	 var xhr = new XMLHttpRequest();

      xhr.open('GET', 'fruites', false);
      xhr.send();

      if (xhr.status != 200) {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
      	debugger;
      	return JSON.parse(xhr.response);
      }
}

function print (el, i) {
	var li = document.createElement('li');

	setTimeout( function () {
		li.innerHTML = el;
		output.appendChild(li);
	}, i*200);
}

function doSetTimeout(i) {
  setTimeout(function() { console.log(i); }, 100);
}

for (var i = 1; i <= 5; ++i)
  doSetTimeout(i)