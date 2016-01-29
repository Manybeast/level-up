/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function (window) {
    function Controller (model, view) {
        var self = this;

        this.view = view;
        this.model = model;

        //Первоначальная отрисовка списка

        this.view.bind('addItem', function (title) {
            debugger;
            self.model.setItem(title);
            self.show();
        });

		this.view.addChannels('deleteItem', function (id){
			self.deleteItem(id);
		});

    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getAll());
    };

    Controller.prototype.setItem = function (title) {
        this.model.setItem(title);
        this.show();
    };
	
	Controller.prototype.deleteItem = function (id){
		this.model.deleteItem(id);
		this.show();
	};

    window.app = window.app || {};
    window.app.Controller = Controller;
})(window);
