/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function (window) {
    function Model() {
        this.test = 'test';
        this.items = [{
            id: 0,
            title: "Test",
            completed: true,
            checked: ''
        },
            {
                id: 1,
                title: "Test2",
                completed: false
                title: 'test2',
                completed: false,
                checked: ''
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
        
	
	Model.prototype.deleteItem = function (id) {
		var currentIndex = this.items.indexOf (this.items.filter(function (item){
			return item.id === parseInt(id);
		})[0]);
		
		this.items.splice(currentIndex, 1);
	};

    window.app = window.app || {};
    window.app.Model = Model;
})(window);
