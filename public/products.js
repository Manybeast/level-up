var AJAX = {
    GET: function (url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            // по окончании запроса доступны:
            // status, statusText
            // responseText, responseXML (при content-type: text/xml)

            if (this.status != 200) {
                // обработать ошибку
                console.log('Error');
                return;
            }

            console.log(xhr.response);
            callback(JSON.parse(xhr.response));
            // получить результат из this.responseText или this.responseXML
        }
    },
    POST: function (url, callback, data) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);

        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');


        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            // по окончании запроса доступны:
            // status, statusText
            // responseText, responseXML (при content-type: text/xml)

            if (this.status != 200) {
                // обработать ошибку
                console.log('Error');
                return;
            }

            console.log(xhr.response);
            callback(JSON.parse(xhr.response));
            // получить результат из this.responseText или this.responseXML
        };
    }
};

Object.freeze(AJAX);

var Products = (function () {
    function Constructor(root) {
        this.items = null;
        this.root = document.querySelector(root);
        this.listItem = this.root.querySelector('.listProducts');
        this.addBtn = this.root.querySelector('.add');
        this.removeBtn = this.root.querySelector('.remove');
        this.productField = this.root.querySelector('.fieldProduct');
        this.getItems();
        this.addEvents();
    }

    Constructor.prototype.render = function () {
        var self = this;
        this.listItem.innerHTML = '';
        this.items.forEach(function (item, i) {
            var li = document.createElement('li');
            li.innerHTML = item;
            self.listItem.appendChild(li);
            li.addEventListener('click', function () {
                self.removeFruits(i);
            })
        })
    }


    Constructor.prototype.getItems = function () {
        var self = this;

        AJAX.GET('fruites', function (data) {
            self.items = data;
            self.render();
        });
    };

    Constructor.prototype.addEvents = function () {
        var self = this;
        this.addBtn.addEventListener('click', function () {
            self.addFruits();
        });
    }

    Constructor.prototype.addFruits = function () {
        var newItem = {
                'fruite': this.productField.value
            },
            self = this;

        AJAX.POST('fruites', function (data) {
            self.items = data;
            self.render();
        }, newItem);
    };

    Constructor.prototype.removeFruits = function (id) {
        var xhr = new XMLHttpRequest();


        xhr.open('DELETE', 'fruites/' + id, false);

        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.send();

        if (xhr.status != 200) {
            console.log(xhr.status + ':' + xhr.statusText);
        } else {
            console.log(xhr.response);
            this.items = JSON.parse(xhr.response);
            this.render();
        }
    };

    return Constructor;
})();