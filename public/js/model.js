var Model = (function (){
    function Model() {
        this.items = [{
                id: 0,
                title: "Test",
                complited: 'complited',
                checked: 'checked'
            },
            {
                id:1,
                title: 'test2',
                complited: '',
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
        
        this.view.complited(model.id);

        this.items.push(model);
    };

    return Model;
})();
