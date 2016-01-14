/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function (window) {
    function Controller (model, view) {
        var self = this;

        this.view = view;
        this.model = model;

        this.view.bind('testEvent', function (e) {
            self.view.render( self.model.getTest());
        });
    }


    window.app = window.app || {};
    window.app.Controller = Controller;
})(window);