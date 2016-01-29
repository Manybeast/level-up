var View = (function () {
    function View () {
        console.log('View');

        this.activeBtn = $('#active');
        this.input = $('.new-todo');
        this.output = $('.todo-list');
    }

    View.prototype.render = function (todos) {
        var self = this;

        this.view = '';
        todos.forEach(function (item) {
            self.renderOne(item);
        });

       this.output.html(this.view);
   };

    View.prototype.renderOne = function (item) {
        //Шаблон для отрисовки одного элемента списка
        var defaultTemplate = '<li data-id="{{id}}" class="{{completed}}">'
            + '<div class="view">'
            + '<input class="toggle" type="checkbox" {{checked}}>'
            + '<label>{{title}}</label>'
            + '<button class="destroy"></button>'
            + '</div>'
            + '</li>',
            templ = defaultTemplate.replace('{{id}}', item.id);

       templ = templ.replace('{{completed}}', item.completed);
       templ = templ.replace('{{checked}}', item.checked);
       templ = templ.replace('{{title}}', item.title);


       this.view = this.view + templ;

    };

    function bindCustomEvent (target, type, callback) {
        target.on(type, callback);
    }

    View.prototype.addChanals = function (chanalName, handler) {
        var self = this;

        if (chanalName === 'addItem') {
            this.input.on('keypress', function (e) {
                if (e.which === 13) {
                    handler($(this).val());
                }
            });
        } else if (chanalName === 'comleteItem') {
            this._li = $(this.output).find('li');
            this._li.find('.toggle').on('click', function () {
                handler($(this));
            });
        }
        else if (chanalName === 'deleteItem') {
            //переделать без bindCustomEvent
            bindCustomEvent(this.output, 'click', function (e) {
                var target = null,
                    id = null;

                if (!$(e.target).hasClass('destroy')) {
                    e.preventDefault();
                    return;
                }

                target = e.target;

                id = $(target).parent().parent().attr('data-id');
                handler(id);
            });
        }
    };

    return View;
})();
