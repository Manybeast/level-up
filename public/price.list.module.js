var PriceList = (function () {
    function Constructor(parentElement) {
        this.items = [];
        this.parent = $(parentElement);
        this.input = this.parent.find('.input');
        this.btnAdd = this.parent.find('.btnAdd');
        this.output = this.parent.find('.output');

        this.addEvents();

    }

    Constructor.prototype.callback = function () {
        var self = this;

        return function (res) {
            self.items = res;
            self.renderAll();
        }
    };

    Constructor.prototype.renderOne = function (elemText, i) {
        var _element = $('<li></li>'),
            _title = $('<span></span>'),
            _btnRemove = $('<span></span>');

        _title.text(elemText);

        _btnRemove
            .text('delete')
            .addClass('btnRemove', 'btn');

        _element
            .addClass('item')
            .append(_title)
            .append(_btnRemove);

        return _element;
    };

    Constructor.prototype.renderAll = function () {
        var self = this;
        this.output.text('');
        this.items.forEach(function (item, i) {
            self.output.append(self.renderOne(item, i));
        });
    };

    Constructor.prototype.sendItem = function (item) {
        var sendedData = {
            fruite: item
        };

        API._post('fruites', sendedData, this.callback());
    };

    Constructor.prototype.addEvents = function () {
        var self = this;
        this.btnAdd.on('click', function () {
            debugger;

            if (self.input.val()) {
                self.sendItem(self.input.val());
            }
        })
    };

    return Constructor;
})();

