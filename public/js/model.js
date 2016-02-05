var Model = (function (){
    function Model() {
        this.items = [{
                id: 0,
                title: "Test",
                completed: true,
                // checked: true
            },
            {
                id:1,
                title: 'test2',
                completed: false,
                // checked: false
            }
        ];
        console.log('init Model');
    }

    function generateId () {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

    Model.prototype.getItem = function (typeOfFilter) {
        var self = this,
            filters = {
                'all': function () {
                    return self.items;
                },
                'active': function () {
                    return self.items.filter(function (item) {
                        return item.completed === false;
                    });
                },
                'completed': function () {
                    return self.items.filter(function (item) {
                        return item.completed === true;
                    });
                }
            };

        return filters[typeOfFilter]();
    };

    Model.prototype.setItem = function (itemTitle) {
        var model = {
            id: generateId(),
            title: itemTitle,
            completed: false,
            checked: false
        };

        this.items.push(model);
    };

    Model.prototype.deleteItem = function (id) {
        var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id === parseInt(id);
        })[0]);

        this.items.splice(currentIndex, 1);
    };

    Model.prototype.completeItem = function (id) {
        var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id === parseInt(id);
        })[0]);

        this.items[currentIndex].completed = !this.items[currentIndex].completed;
    };

    Model.prototype.leftItems = function () {
        return this.items.filter(function (item) {
                return item.completed === false;
            });
    };

    return Model;
})();
