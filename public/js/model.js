/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Model = (function () {
    function Model() {
        this.items = [
            {
                id: 0,
                title: "Test",
                completed: true
            },
            {
                id: 1,
                title: 'test2',
                completed: false
            },
            {
                id: 2,
                title: 'test2',
                completed: false
            }
        ];
    }

    Model.prototype.getItems = function (filter) {
        var self = this,
            filters = {
                'all': function () {
                    return self.items;
                },
                'completed': function () {
                   return self.items.filter(function (item) {
                        return item.completed === true;
                    })
                },
                'active': function () {
                    return self.items.filter(function (item) {
                        return item.completed === false;
                    })
                }

            };

        return filters[filter]();
    };

    function generateId() {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

    Model.prototype.setItem = function (itemTitle) {
        var model = {
            id: generateId(),
            title: itemTitle,
            complited: false,
            checked: ''
        };

        this.items.push(model);
    };

    Model.prototype.deleteItem = function (id) {
        var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id === parseInt(id);
        })[0]);

        this.items.splice(currentIndex, 1);
    };
    
    Model.prototype.compleateItem = function (id) {
        var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id === parseInt(id);
        })[0]);

        this.items[currentIndex].checked = !this.items[currentIndex].checked;
    };


    return Model;
})();