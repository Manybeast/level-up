/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function (window) {
    function Model() {
        this.items = [
            {
                id: 0,
                title: "Test",
                completed: true
            },
            {
                id: 1,
                title: "Test2",
                completed: false
            }
        ];
    }

    Model.prototype.getAll = function () {
        return this.items;
    };

    function generateID () {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

    window.TodoList = window.TodoList || {};
    window.TodoList.Model = Model;
})(window);