/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Model = (function () {
    function Model() {
        this.items = [{
            id: 0,
            title: "Test",
            completed: true,
            colorizing: false,
            checked: 'checked'
        },
            {
                id: 1,
                title: 'test2',
                complited: false,
                colorizing: false,
                checked: ''
            }
        ]
    }

    Model.prototype.getAll = function () {
        return this.items;
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
        debugger;
    };
    Model.prototype.colorChange = function(){
        var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id === parseInt(id);
        })[0]);

        this.items[currentIndex].colorizing = !this.items[currentIndex].colorizing;
    }


    return Model;
})();