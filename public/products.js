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
        this.items = [];
        this.root = document.querySelector(root);
        this.listItem = this.root.querySelector('.listProducts');
        this.addBtn = this.root.querySelector('.add');
        this.removeBtn = this.root.querySelector('.remove');
        this.productField = this.root.querySelector('.fieldProduct');
        this.getItems();
        this.addEvents();
    }

    Constructor.prototype.renderAll = function () {
        var self = this;
        this.listItem.innerHTML = '';
        this.items.forEach(function (item, i) {            
            self.listItem.appendChild(self.renderOne(item, i));            
        })
    }

    Constructor.prototype.renderOne = function (text, i) {
        var self = this,
            li,
            title,
            deleteBtn;

        li = document.createElement('li');
        title = document.createElement('span');
        deleteBtn = document.createElement('span');
        editField = document.createElement('input');
        editField.style.display = 'none';

        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML = 'x';
        deleteBtn.addEventListener('click', function () {
            self.removeFruits(i);
        });

        title.innerHTML = text;
        editField.value = text;
        li.appendChild(editField);
        li.appendChild(title);
        li.appendChild(deleteBtn);
     }


    Constructor.prototype.getItems = function () {
        var self = this;

        AJAX.GET('fruites', function (data) {
            self.items = data;
            self.renderAll();
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
            self.renderAll();
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
            this.renderAll();
        }
    };

    return Constructor;
})();