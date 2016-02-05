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

    Model.prototype.getAll = function () {
        return this.items;
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

    Model.prototype.getCompleted = function () {
        return this.getAll().filter(function (item) {
                return item.completed === true;
            });
    };

    Model.prototype.getActive = function () {
        return this.getAll().filter(function (item) {
                return item.completed === false;
            });
    };

    Model.prototype.leftItems = function () {
        return this.getAll().filter(function (item) {
                return item.completed === false;
            });
    };

    return Model;
})();
