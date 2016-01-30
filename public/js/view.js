/**
 * Created by IlyaLitvinov on 14.01.16.
 */
//globals observer app

var View = (function () {
    function View() {
        console.log('View');
        this.activeBtn = $('#active');
        this.input = $('.new-todo');
        this.output = $('.todo-list');
    }

    View.prototype.render = function (todos, params) {
        var self = this;

        this.view = '';

        todos.forEach(function (item) {
            self.renderOne(item);
        });

        this.output.html(this.view);
    };

    View.prototype.renderOne = function (item) {
        //Шаблон для отрисовки одного элемента списка
        var defaultTemplate = '<li data-id="{{id}}" class="{{completed}} ">'
                + '<div class="view">'
                + '<input class="toggle" type="checkbox" {{checked}}>'
                + '<label class = "title">{{title}}</label>'
                + '<button class="destroy"></button>'
                + '</div>'
                + '</li>',
            template = defaultTemplate.replace('{{id}}', item.id);

        template = template.replace('{{completed}}', item.completed);
        template = template.replace('{{checked}}', item.checked);
        template = template.replace('{{title}}', item.title);

        this.view = this.view + template;
    };

    View.prototype.addChannels = function (channelName, handler) {
        var self = this;

        if (channelName === 'addItem') {
            bindCustomEvents(self.input, 'blur keypress', function (e) {
                var title = self.input.val();
                //навешевание слбытия на клавишу enter code = 13
                if ((e.which === 13 || e.type === 'blur') && title) {
                    handler(title);
                    self.input.val('');
                }
            });
        } else if (channelName === 'deleteItem') {
            bindCustomEvents(this.output, 'click', function (e) {
                var target = null,
                    id = null;

                if (!$(e.target).hasClass('destroy')) {
                    e.preventDefault();
                    return;
                }

                target = e.target;

                id = $(target).parent().parent().attr('data-id');
                handler(id);
            })
        } else if (channelName === 'test') {
            bindCustomEvents(this.output, 'click', function (e) {
                if (!$(e.target).hasClass('title')) {
                    e.preventDefault();
                    return;
                }

                $(e.target).css({
                    color: 'red'
                })
            })
        }
    };

    function bindCustomEvents(target, type, callback) {
        target.on(type, callback);
    }

    return View;
})();
