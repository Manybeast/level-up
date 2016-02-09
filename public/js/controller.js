/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Controller = (function () {
    function Controller (model, view) {
        console.log('init Controller');
        var self = this;

        this.view = view;
        this.model = model;
        this.filter = 'all';

        //Первоначальная отрисовка списка
        this.show();
        this.view.addChannels('addItem', function (title) {
            self.setItem(title);
        });
        this.view.addChannels('deleteItem', function (id) {
            self.deleteItem(id);
        });
        this.view.addChannels('ttt', function (id) {
            self.changeState(id);
        });
        this.view.addChannels('filterTasks', function (filter) {
            self.toFilter(filter);
        });
        this.view.addChannels('clearCompleted', function (id) {
            self.completedClear(id);
        });
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getItems(this.filter));
    };

    Controller.prototype.setItem = function (title) {
        this.model.setItem(title);
        this.show();
    };

    Controller.prototype.deleteItem = function (id) {
        this.model.deleteItem(id);
        this.show();
    };

    Controller.prototype.changeState = function (id) {
        this.model.getblabla(id);
        this.show();
    };   

    Controller.prototype.toFilter = function (filter) {
        this.filter = filter;
        this.show();
    };

    Controller.prototype.completedClear = function (id) {
        this.model.clearComplet(id);
        this.show();
    }; 

    return Controller;
})();