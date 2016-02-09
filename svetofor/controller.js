var Controller = (function () {
    function Controller(model, view) {
        console.log('init Controller');
        var self = this;

        this.view = view;
        this.model = model;
               
      
        this.view.addChannels('changeColor', function (color) {
            self.setColor(color);
        });
     
    }
    
    Controller.prototype.setColor = function (color) {
        this.model.setColor(color);       
    };

    return Controller;
})();