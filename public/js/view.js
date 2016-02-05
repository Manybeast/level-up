var View = (function () {
    function View () {
        console.log('View');

        this.activeBtn = $('#active');
        this.input = $('.new-todo');
        this.output = $('.todo-list');
        this.filters = $('.filters');
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
            + '<input class="toggle" type="checkbox" checked = {{checked}}>'
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
        } else if (chanalName === 'completeItem') {
            this.output.on('click', function (e) {
                var id = null;

                if (!$(e.target).hasClass('toggle')) {
                    e.stopPropagation();
                    return;
                }

                if ($(e.target).attr('checked') === 'true' && $(e.target).closest('li').hasClass('true')) {
                    $(e.target).removeAttr('checked');
                    $(e.target).closest('li').removeClass('true');
                } else {
                    $(e.target).removeAttr('checked');
                    $(e.target).closest('li').removeClass('true');
                    $(e.target).attr('checked', 'true');
                    $(e.target).closest('li').addClass('true');
                }

                id = $(e.target).closest('li').attr('data-id');
                handler(id);
            });
        } else if (chanalName === 'deleteItem') {
            //переделать без bindCustomEvent
            this.output.on('click', function (e) {
                var id = null;

                if (!$(e.target).hasClass('destroy')) {
                    e.stopPropagation();
                    return;
                }

                id = $(e.target).closest('li').attr('data-id');
                handler(id);
            });
        } else if (chanalName === 'activeBtn') {
            var self = this;
            
            this.filters.find('li #active').on('click', function (e) {
                if ($(e.target).hasClass('selected') || !$(e.target).attr('id') === 'active') {
                    e.stopPropagation();
                    return;
                }
                
                $(self.filters).find('li a').removeClass('selected');
                $(e.target).addClass('selected');
                
                handler();
            });
        } else if (chanalName === 'completedBtn') {
            var self = this;
            
            this.filters.find('li #completed').on('click', function (e) {        
                if ($(e.target).hasClass('selected') || !$(e.target).attr('id') === 'completed') {
                    e.stopPropagation();
                    return;
                }
                
                $(self.filters).find('li a').removeClass('selected');
                $(e.target).addClass('selected');
                
                handler();
            });
        } else if (chanalName === 'allBtn') {
            var self = this;
            
            this.filters.find('li #all').on('click', function (e) {
                if ($(e.target).hasClass('selected') || !$(e.target).attr('id') === 'all') {
                    e.stopPropagation();
                    return;
                }
                
                $(self.filters).find('li a').removeClass('selected');
                $(e.target).addClass('selected');
                
                handler();
            });
        }
    };

    return View;
})();
