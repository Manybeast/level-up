var View = (function () {
    function View () {
        console.log('init View');
        this.activeBtn = $('#active');
        this.input = $('.new-todo');
        this.output = $('.todo-list');
    }

   View.prototype.render = function (todos) {
        var here = this;

        this.view = '';
        todos.forEach(function (item) {
            here.renderOne(item);
        });
       
       this.output.html(this.view);
   };

   View.prototype.renderOne = function (item) {
        var defaultTeml = '<li data-id="{{id}}" class="{{complited}}">'
            + '<div class="view">'
            + '<input class="toggle" type="chekbox" {{checked}}>'
            + '<label>{{title}}</label>'
            + '<button class="destroy"></button>'
            + '</div>'
            + '</li>',
            templ = defaultTeml.replace('{{id}}', item.id);
       
       templ = defaultTeml.replace('{{complited}}', item.complited);
       templ = defaultTeml.replace('{{checked}}', item.checked);
       templ = defaultTeml.replace('{{title}}', item.title);
       
       this.view = this.view + templ;
    };


    return View;
})();