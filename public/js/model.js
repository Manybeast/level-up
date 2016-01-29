/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Model = (function (){
    function Model() {
        this.items = [{
                id: 0,
                title: "Test",
                completed: true
            },
            {
                id: 1,
                title: "Test2",
                completed: false,
                checked: ''
            }
        ];
        console.log('init Model');
    }

    function generateId() {
       return Math.floor((1 + Math.random()) * 0x10000);
    }

    Model.prototype.getAll = function () {
        return this.items;
    };

    Model.prototype.setItem = function () {
        var model = {
            id: generateId(),
            title: itemTitle,
            completed: false,
            checked: ''
        };

        this.items.push(model);
    };

    return Model;
})();