var Model = (function (){
    function Model() {
        this.items = [{
                id: 0,
                title: "Test",
                complited: true,
                checked: 'checked'
            },
            {
                id:1,
                title: 'test2',
                complited: false,
                checked: false
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
            complited: false,
            checked: false
        };

        this.items.push(model);
    };

    return Model;
})();
