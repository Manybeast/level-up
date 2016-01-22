/**
 * Created by IlyaLitvinov on 14.01.16.
 */
//globals observer app
(function (window) {
    function View() {
        this.activeBtn = $('#active');
        this.input = $('.new-todo');
        this.output = $('.todo-list');
    }

    View.prototype.render = function (toDoItemList) {
        var self = this;

        this.view = '';

        toDoItemList.forEach(function (toDoItem) {
            self.renderOne(toDoItem);
        });

        this.output.html(this.view);
    };

    View.prototype.renderOne = function (toDoItem) {
        var defaultTemplate = '<li data-id="{{id}}" class="{{completed}}">'
                + '<div class="view">'
                + '<input class="toggle" type="checkbox" {{checked}}>'
                + '<label>{{title}}</label>'
                + '<button class="destroy"></button>'
                + '</div>'
                + '</li>',
            template = defaultTemplate.replace('{{id}}', item.id);

        template = template.replace('{{completed}}', item.completed);
        template = template.replace('{{checked}}', item.checked);
        template = template.replace('{{title}}', item.title);

        this.view = this.view + template;
    };

    View.prototype.bindInstance = function (event, handler) {
        var self = this;

    };

    function bindCustomEvents() {

    }

    window.TodoList = window.TodoList || {};
    window.TodoList.View = View;
})(window);