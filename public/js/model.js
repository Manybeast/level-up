var Model = (function (){
    function Model() {
        this.items = [{
                id: 0,
                title: "Test",
                completed: 'completed',
                checked: 'checked'
            },
            {
                id:1,
                title: 'test2',
                completed: '',
                checked: ''
            }
        ];
        console.log('init Model');
    }

    function generateId () {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

    Model.prototype.getAll = function () {
        return this.items;
    };

    Model.prototype.setItem = function (itemTitle) {
        var model = {
            id: generateId(),
            title: itemTitle,
            complited: '',
            checked: ''
        };

        this.items.push(model);
    };

    Model.prototype.completedItem = function (item) {
        if (item.hasClass('completed') === true) {
            item.toggleClass('completed');
        } else {
            item.toggleClass('completed');
        }
    };

    Model.prototype.deleteItem = function (id) {
        var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id = parseInt(id);
        })[0]);


    };

    return Model;
})();
