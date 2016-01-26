var Model = (function () {
    function Model () {
        this.items = [{
                id: 0,
                title: 'test',
                complited: true
            },
            {
                id:1,
                title: 'test2',
                complited: false
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

    Model.prototype.setItem = function () {
        var model = {
            id: generateId(),
            title: itemTitle,
            complited: false
        };
        
        this.items.push(model);
    };

    return Model;
})();