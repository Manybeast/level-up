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
        var defaultTemplate = '<li data-id="{{id}}" class="{{complited}}">'
            + '<div class="view">'
            + '<input class="toggle" type="chekbox" {{checked}}>'
            + '<label>{{title}}</label>'
            + '<button class="destroy"></button>'
            + '</div>'
            + '</li>',
            templ = defaultTemplate.replace('{{id}}', item.id);

       templ = templ.replace('{{complited}}', item.complited);
       templ = templ.replace('{{checked}}', item.checked);
       templ = templ.replace('{{title}}', item.title);
       this.view = this.view + templ;
    };

    View.prototype.addChanels = function (chenallName, handler) {
        var self = this;

        if (chenallName === 'addItem') {
            this.input.on('keypress', function (e) {
                if (e.which ===13) {
                    handler($(this).val());
                }
            });
        }
    };

    return View;
})();
//var View = (function () {
//    function View() {
//        this.activeBtn = $('#active');
//        this.input = $('.new-todo');
//        this.output = $('.todo-list');
//
//        this.view = '';
//    }
//
//    View.prototype.render = function (data) {
//        var self = this;
//
//        this.view = '';
//        data.forEach(function (item) {
//            self.renderOne(item);
//        });
//
//        debugger;
//        this.output.html(this.view);
//    };
//
//    View.prototype.renderOne = function (item) {
//
//        //Шаблон для отрисовки одного элемента списка
//        var defaultTemplate =  '<li data-id="{{id}}" class="{{completed}}">'
//            + '<div class="view">'
//            + '<input class="toggle" type="checkbox" {{checked}}>'
//            + '<label>{{title}}</label>'
//            + '<button class="destroy"></button>'
//            + '</div>'
//            + '</li>',
//            template = defaultTemplate.replace('{{id}}', item.id);
//
//        template = template.replace('{{completed}}', item.completed);
//        template = template.replace('{{checked}}', item.checked);
//        template = template.replace('{{title}}', item.title);
//
//        this.view = this.view + template;
//    };
//
//    View.prototype.bind = function (event, handler) {
//        var self = this;
//
//        //разделение "каналов" событий
//        if (event === 'addItem') {
//            bindCustomEvents(self.input, 'blur keypress', function (e) {
//                var title = self.input.val();
//
//                //навешевание слбытия на клавишу enter code = 13
//                if((e.which === 13 || e.type === 'blur') && title) {
//                    handler(title);
//                    self.input.val('');
//                }
//            });
//        }
//    };
//
//    //обертка для более удобного навешивания событий для работы с разными сущностями.

//
//   return View
//})();
