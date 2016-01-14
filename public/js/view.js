/**
 * Created by IlyaLitvinov on 14.01.16.
 */
//globals observer app
(function (window) {
    function View () {
        this.activeBtn = $('#active');
        this.input = $('.new-todo');
    }

    View.prototype.render = function (data) {
        this.input.val(data);
    };

    View.prototype.bind = function (event, handler) {
        var self = this;
        if( event === 'testEvent') {
            bindCustomEvents(self.activeBtn, 'click', handler);
        }
    };
    //обертка для более удобного навешивания событий для работы с разными сущностями.
    function bindCustomEvents (target, type, callback) {
        target.on(type, callback);
    }

    window.app = window.app || {};
    window.app.View = View;
})(window);