/**
 * Created by IlyaLitvinov on 14.01.16.
 */
/*(function (window) {
    function Model() {
        this.test = 'test';
        this.items = [{
            id: 0,
            title: "Test",
            completed: true
        },
            {
                id: 1,
                title: "Test2",
                completed: false
            }
        ]
    }

    Model.prototype.getAll = function () {
        return this.items;
    };

    Model.prototype.setItem = function (itemTitle) {
        var model = {
            id: generateId(),
            title: itemTitle,
            completed: false
        };

        this.items.push(model);
    };

    function generateId() {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

    window.app = window.app || {};
    window.app.Model = Model;
})(window);*/


var Model = (function () {
    function Model() {
        console.log('Model!');

        this.items = [{
                id: 0,
                title: "Test",
                completed: true
        },
            {
                id: 1,
                title: "Test2",
                completed: false
        }
    ]
    }
    return Model;
})();